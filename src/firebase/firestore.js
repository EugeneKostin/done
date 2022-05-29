import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./init";

const postsRef = collection(db, "posts");

export const addPost = async (data) => {
  try {
    await addDoc(postsRef, data);
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllPosts = async () => {
  const q = query(postsRef, orderBy("createdOn", "desc"));
  try {
    const snapshot = await getDocs(q);
    return snapshot;
  } catch (err) {
    throw new Error(err);
  }
};
