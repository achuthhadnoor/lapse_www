import database from '../../lib/firebase'

export default async (req, res) => {
    // let email = "achuth.hadnoor123@gmail.com";
    // let phrase = '00MTI-TGPS1-4WP7J-CTGYL';
    const { email, phrase } = req.body;
    try {
        let dataref = database.ref(phrase);
        await dataref.once('value').then((snapshot) => {
            const data = snapshot.val();
            if (data) {
                if (data.email === email) {
                    dataref.set({
                        email: email,
                        key: data.key,
                        used: true,
                    })
                    return res.json({ status: 200, message: `welcome back ${email}` });
                }
                else {
                    if (data.email === '') {
                        dataref.set({
                            email: email,
                            key: data.key,
                            used: true
                        })
                        return res.json({ status: 200, message: "Let's get started" });
                    }
                    return res.json({ status: 503, message: "please check email or license key" })
                }
            }
            else {
                res.json({ status: 503, message: "please check email or license key" })
            }
        })

    } catch (error) {
        return res.json({ status: 403, message: `Unknown ${error}` })
    }
}

