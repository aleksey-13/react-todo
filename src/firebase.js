import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBVznc40RGycnYNwgg0Eitc4cNooy5A8kg",
  authDomain: "react-todo-fb322.firebaseapp.com",
  databaseURL: "https://react-todo-fb322.firebaseio.com",
  projectId: "react-todo-fb322",
  storageBucket: "react-todo-fb322.appspot.com",
  messagingSenderId: "772236185811",
  appId: "1:772236185811:web:b2da52c0f65e05a341c426",
});

const db = firebase.firestore();

export { db };
