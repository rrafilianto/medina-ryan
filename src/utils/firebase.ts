import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDVw9R9o3j_G5n_UJnUcGyA51q5WzYCNm4",
  authDomain: "wedding-invitation-e923c.firebaseapp.com",
  databaseURL: "https://wedding-invitation-e923c-default-rtdb.firebaseio.com",
  projectId: "wedding-invitation-e923c",
  storageBucket: "wedding-invitation-e923c.appspot.com",
  messagingSenderId: "398036189078",
  appId: "1:398036189078:web:d4c95e166689288146e7b7",
  measurementId: "G-3GNLG5Y5YK",
};

firebase.initializeApp(config);

export default firebase.firestore();
