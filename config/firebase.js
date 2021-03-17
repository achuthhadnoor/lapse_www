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
    verifyUser = (email,phrase)=>{
        return new Promise((resolve,reject)=>{
            this.database.ref('')
        })
    }

}

export default new Api();