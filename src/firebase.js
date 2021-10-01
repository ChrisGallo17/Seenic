import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAff4TMVi_Fe4fPZWAgaJmTVF3Pj671o8w",
  authDomain: "seenic-793ab.firebaseapp.com",
  projectId: "seenic-793ab",
  storageBucket: "seenic-793ab.appspot.com",
  messagingSenderId: "20747660544",
  appId: "1:20747660544:web:cf2d601045ccb50f3b17e5",
  measurementId: "G-GZBJVD7YNK"
};

// Marketplace Dark DB
// const firebaseConfig = {
//   apiKey: "AIzaSyCB7G7q1IEfHL_3JDIENW3j9mHGCnOu9mw",
//   authDomain: "mp-dark.firebaseapp.com",
//   databaseURL: "https://mp-dark-default-rtdb.firebaseio.com",
//   projectId: "mp-dark",
//   storageBucket: "mp-dark.appspot.com",
//   messagingSenderId: "116343667848",
//   appId: "1:116343667848:web:466508f9f58ff2d012333d",
//   measurementId: "G-80MX85TLP8"
// };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app;