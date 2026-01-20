// Firebase v9 modular SDK - Google Authentication
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the auth instance from firebase-config (DO NOT call getAuth() here)
import { auth } from "../firebase-config";

function Auth() {
  const provider = new GoogleAuthProvider();
  // Use the imported auth instance, don't call getAuth() again

  signInWithPopup(auth, provider)
    .then((result) => {
      if (result._tokenResponse.isNewUser) {
        console.log("This is a new User");
      } else {
        console.log("This is not a new User");
      }
    })
    .catch((error) => {
      console.log("Google Sign-In Error:", error);
    });
}

export default Auth;
