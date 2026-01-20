// Firebase v9 modular SDK - Initialize Firebase ONCE for the entire app
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration from environment variables
// Make sure .env file exists in root with REACT_APP_ prefixed variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Log to verify env variables are loaded (remove in production)
console.log("Firebase Config Loaded:", {
  apiKey: firebaseConfig.apiKey ? "✓" : "✗",
  projectId: firebaseConfig.projectId || "missing"
});

// Initialize Firebase app (this should happen ONLY ONCE)
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

// Export both db and auth for use in other files
// Other files should IMPORT these, not call getAuth() again
export { db, auth };