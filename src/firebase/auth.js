import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './init';

export const login = async (email, password) => {
  console.log({ email, password });
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    throw new Error(err);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    throw new Error(err);
  }
};

// firebase.auth().currentUser

//
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const { user } = userCredential;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
