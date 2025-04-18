const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addEducator = functions.region("us-central1").https.onCall(async (data, context) => {
  const callerUID = context.auth?.uid;
  const callerDoc = await admin.firestore().doc(`users/${callerUID}`).get();

  if (callerDoc.data()?.role !== "admin") {
    throw new functions.https.HttpsError("permission-denied", "Only admins can add educators.");
  }

  const { firstName, lastName, email } = data;

  const generatedPassword = `${firstName[0].toLowerCase()}${lastName.toLowerCase()}123!`;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password: generatedPassword,
      displayName: `${firstName} ${lastName}`,
      emailVerified: false,
    });

    await admin.firestore().doc(`users/${userRecord.uid}`).set({
      firstName,
      lastName,
      email,
      role: "educator",
    });

    return {
      success: true,
      password: generatedPassword,
    };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
