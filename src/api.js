import { db } from "./firebase";

export function getCollection(collectionName) {
  const collection = db.collection(collectionName)
    return (query = () => collection) => {
      return query(db.collection(collectionName))
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
}