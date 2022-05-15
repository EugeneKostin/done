import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './init';
import { getMessageFromErrorCode } from '../helper';

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch ({ code }) {
    console.log(code);
    throw new Error(getMessageFromErrorCode(code));
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch ({ code }) {
    const err = {
      code,
      message: getMessageFromErrorCode(code),
    };
    throw new Error(getMessageFromErrorCode(code));
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
