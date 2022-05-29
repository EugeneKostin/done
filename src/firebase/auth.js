import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./init";
import getMessageFromErrorCode from "../helper";

export const login = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch ({ code }) {
    throw new Error(getMessageFromErrorCode(code));
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch ({ code }) {
    throw new Error(getMessageFromErrorCode(code));
  }
};
