// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDi1z-q7lRd4GL5KbwROl2Dkbx4cP6ox6Q",
//   authDomain: "myproject-900a2.firebaseapp.com",
//   projectId: "myproject-900a2",
//   storageBucket: "myproject-900a2.appspot.com",
//   messagingSenderId: "232712176988",
//   appId: "1:232712176988:android:b2c0ea53aefd97d150ed99",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default function LoginFunction(email, pwd) {
//     return signInWithEmailAndPassword(auth, email, pwd)
//         .then((userCredential) => true)
//         .catch((error) => false);
// }



// LoginFunction.js

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

async function LoginFunction(email, password) {
  try {
    await signInWithEmailAndPassword(getAuth(), email, password);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default LoginFunction;
