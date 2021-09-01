import database from '../../lib/firebase'
// Get spreadsheet npm package
const { GoogleSpreadsheet } = require('google-spreadsheet');

// Ensure you've updated this file with your client secret
const clientSecret = require('../../public/client_secret.json');

// Add your Google sheet ID here
const googleSheetID = '1bDR2wwvaL8sbKmV_qjgdAKHnRCr2baJ3qkGOLbE7eVg';

// Instantiates the spreadsheet
const sheet = new GoogleSpreadsheet(googleSheetID);

// Asynchronously get the data
async function verifyCode(code) {
    let valid = false;
    try {
        // Authenticate using the JSON file we set up earlier
        await sheet.useServiceAccountAuth(clientSecret);
        await sheet.loadInfo();

        // Get the first tab's data
        const tab = sheet.sheetsByIndex[0];

        // Get row data
        const rows = await tab.getRows();
        // Empty array for our data
        let data = [];

        // If we have data
        if (rows.length > 0) {
            // Iterate through the array of rows
            // and push the clean data from your spreadsheet
            rows.forEach(row => {
                data.push(row['Name']);
                if (code === row._rawData[0]) {
                    valid = true;
                }
            });
        } else {
            return false;
        }
        return { valid: valid };

    } catch (err) {
        return { valid: false };
    }
}
export default async (req, res) => {
    // let email = "achuth.hadnoor123@gmail.com";
    // let phrase = '00MTI-TGPS1-4WP7J-CTGYL';
    const { email, phrase } = req.body;
    try {
        let valid = await verifyCode(phrase);
        if (valid.valid) {
            let dataref = database.ref(phrase);
            await dataref.once('value').then((snapshot) => {
                const data = snapshot.val();
                if (data) {
                    if (data.email === email) {
                        dataref.set({
                            email: email,
                            key: data.key,
                            used: data.count + 1,
                        })
                        return res.json({ status: 200, message: `welcome back ${email}` });
                    }
                }
                else {
                    if (email !== '') {
                        dataref.set({
                            email: email,
                            key: phrase,
                            used: true,
                            count:1
                        })
                        return res.json({ status: 200, message: "Let's get started" });
                    }
                    return res.json({ status: 503, message: "please check email or license key" })
                }
                // else {
                //     res.json({ status: 503, message: "please check email or license key" })
                // }
            })
        }
    } catch (error) {
        return res.json({ status: 403, message: `Unknown ${error}` })
    }
}

