import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config";

const Submit = async (formData) => {
  try {
    await addDoc(collection(db, "ieee_applications"), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    console.log("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export default Submit;
