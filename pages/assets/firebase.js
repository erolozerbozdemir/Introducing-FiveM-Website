// assets/firebase.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth, onAuthStateChanged,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🔒 Config'i buraya GÖMÜYORUZ (env dosyasını okumaya çalışmıyoruz)
const firebaseConfig = {
  apiKey: "AIzaSyCHKEClTY9joDTNPH_wQjhDQJ5IZWQEtIg",
  authDomain: "introducing-fivem.firebaseapp.com",
  projectId: "introducing-fivem",
  storageBucket: "introducing-fivem.firebasestorage.app",
  messagingSenderId: "923623657468",
  appId: "1:923623657468:web:62207692aee728cc25ec79",
  measurementId: "G-N76B0WKL6V"
};

// App'i başlat
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Dışa aktarım
export const auth = getAuth(app);
export const db   = getFirestore(app);

// Kolay yardımcılar
export const Auth = {
  onChange: (cb) => onAuthStateChanged(auth, cb),
  signUp:   (email, pass) => createUserWithEmailAndPassword(auth, email, pass),
  signIn:   (email, pass) => signInWithEmailAndPassword(auth, email, pass),
  signOut:  () => signOut(auth),
};

export const Profile = {
  save: (uid, data) => setDoc(doc(db, "users", uid), data, { merge: true }),
  get:  (uid) => getDoc(doc(db, "users", uid)),
};
