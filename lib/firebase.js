var admin = require("firebase-admin");
var serviceAccount = require("../constants/lapse-f0e72-firebase-adminsdk-y4g0w-f12b9cc9ba.json");
if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://lapse-f0e72-default-rtdb.firebaseio.com"
    });
}
export default admin.database();