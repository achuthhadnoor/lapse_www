import app from "firebase/app";
import { firebaseConfig } from "./../constants";
import "firebase/auth";
import "firebase/database";
// import "firebase/firestore";
// import { updateUser } from "../redux/actions/userActions";

class Api {
    constructor() {
        if (app.apps.length === 0) {
            app.initializeApp(firebaseConfig);
            this.auth = app.auth();
            this.database = app.database();
        }
    }
    verifyUser = (email, phrase) => {
        return new Promise((resolve, reject) => {
            try {
                let dataref = this.database.ref(phrase);
                dataref.once('value').then((snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        if (data.email === email) {
                            dataref.set({
                                email: email,
                                key: data.key,
                                user: true
                            })
                            return resolve("successful");
                        }
                        else {
                            if (data.email === '') {
                                dataref.set({
                                    email: email,
                                    key: data.key,
                                    user: true
                                })
                                return resolve("successful");
                            }
                            reject("enter valid email or license key")
                        }
                    }
                    else {
                        reject("enter valid email or license key")
                    }
                })

            } catch (error) {
                return reject({ status: 403, message: `Unknown ${error}` })
            }
        })
    }

}

export default new Api();