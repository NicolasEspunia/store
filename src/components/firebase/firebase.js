// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ5htb8S9SN7oBsqtPgjPbrNR93kAA6-o",
  authDomain: "lujanhardware-a4047.firebaseapp.com",
  projectId: "lujanhardware-a4047",
  storageBucket: "lujanhardware-a4047.appspot.com",
  messagingSenderId: "163181273001",
  appId: "1:163181273001:web:974e64691bb926cb4b6eb8",
  measurementId: "G-57231RPLN2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
// agregando nuestra funciones 

export function getFirestore(){    
  return firebase.firestore(app)
}

