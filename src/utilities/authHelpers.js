// src/utils/authHelpers.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const signUpUserWithRole = async (email, password, role = "student") => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  await setDoc(doc(db, "users", uid), {
    role,
    createdAt: new Date()
  });

  return userCredential.user;
};
