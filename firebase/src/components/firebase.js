import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";
require('dotnev').config()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const GetValue = async () => {
    const docRef = doc(db, 'testing', 'Current');
    const docSnap = await getDoc(docRef);
    return docSnap.data().value;
}

const UploadValue = async (newValue) => {
    const docRef = doc(db, 'testing', 'Current');
    let result = await updateDoc(docRef, {
        value: parseInt(newValue)
    })
    return newValue;
}

export {GetValue, UploadValue}


