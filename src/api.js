import { db } from "./firebase";

export function getCollection(collection) {
    return db.collection(collection)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return data;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}