import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";

import FirebaseConfig from "./Firebase.config";

const firebaseApp = initializeApp(FirebaseConfig);
const db = getFirestore(firebaseApp);

const firebaseApi = {
  googlePopup: async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(firebaseApp), provider);
      return result;
    } catch (error) {
      console.error("Erro na autenticar via Google:", error);
      throw error;
    }
  },

  addUser: async (u) => {
    await setDoc(
      doc(db, "users", u.id),
      {
        name: u.name,
        avatar: u.avatar,
      },
      { merge: true }
    );
  },
  getContactList: async (userId) => {
    let list = [];

    try {
      let results = await getDocs(collection(db, "users"));
      results.forEach((result) => {
        let data = result.data();
        if (result.id !== userId) {
          list.push({
            id: result.id,
            name: data.name,
            avatar: data.avatar,
          });
        }
      });
    } catch (error) {
      console.error("Erro ao obter a lista de contatos:", error);
      throw error;
    }

    return list;
  },
};

export default firebaseApi;
