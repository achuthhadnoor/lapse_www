import database from '../../lib/firebase'

export default async (req, res) => {
    // let email = "achuth.hadnoor123@gmail.com";
    // let phrase = '00MTI-TGPS1-4WP7J-CTGYL';
    const {
        query: { email, phrase }
    } = req;
    try {
        let dataref = database.ref(phrase);
       await  dataref.once('value').then((snapshot) => {
            const data = snapshot.val();
            if (data) {
                if (data.email === email) {
                    dataref.set({
                        email: email,
                        key: data.key,
                        user: true,
                    })
                    return res.json({ success: 200, message: "successful again" });
                }
                else {
                    if (data.email === '') {
                        dataref.set({
                            email: email,
                            key: data.key,
                            user: true
                        })
                        return res.json({ success: 200, message: "successful" });
                    }
                    return res.json({ code: 503, message: "enter valid email or license key" })
                }
            }
            else {
                res({ code: 503, message: "enter valid email or license key" })
            }
        })

    } catch (error) {
        return res.json({ status: 403, message: `Unknown ${error}` })
    }
}

function verifyUser(email, phrase) {
    return new Promise((resolve, reject) => {

    })
}