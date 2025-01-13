import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgRxcw-AY7fqIdjGwwVLw-kzH9HnRCUjY",
  authDomain: "play-baska.firebaseapp.com",
  projectId: "play-baska",
  storageBucket: "play-baska.firebasestorage.app",
  messagingSenderId: "20830538585",
  appId: "1:20830538585:web:fe05a6207ab2323fe3da48",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);

export const subscribe = (col: string, id: string, cb: Function) => {
  return onSnapshot(doc(firestore, col, id), (doc) => {
    cb({
      id,
      ...doc.data(),
    });
  });
};

export const edit = async (col: string, id: string, data: any) => {
  await setDoc(doc(firestore, col, id), data);
};
