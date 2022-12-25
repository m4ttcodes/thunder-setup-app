import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsaxRK1ymaBP58vCtFF9YsEbgugdpaL2M",
  authDomain: "thunder-setup-app.firebaseapp.com",
  projectId: "thunder-setup-app",
  storageBucket: "thunder-setup-app.appspot.com",
  messagingSenderId: "12781208531",
  appId: "1:12781208531:web:a56d57e24c3ec927d5a526"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
