
var admin = require("firebase-admin");

var serviceAccount = require("../public/snipmail-firebase-adminsdk-94xzr-de7227803c.json");
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://snipmail-default-rtdb.firebaseio.com"
  });
}

export default admin.database();