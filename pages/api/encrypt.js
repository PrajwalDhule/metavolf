import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import bcrypt, { matches } from "bcrypt";

export default async function handler(req, res) {
  const { email, password } = req.body;
  try {
    // const encryptedPassword = await bcrypt.hash(password, 16);
    var collectionRef = collection(db, "clientAuth");
    const queryRef = query(collectionRef, where("email", "==", email));
    const snapshot = await getDocs(queryRef);
    if (snapshot.empty) {
      res.status(404).json({ error: "No matching documents." });
    } else {
      const matchingDocument = snapshot.docs[0];

      // Compare the provided password with the hashed password in the matching document
      const isMatch = await bcrypt.compare(
        password,
        matchingDocument.data().hashedPassword
      );
      if (isMatch) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
      // res.status(200).json({ data: snapshot.docs });
      // const docs = querySnapshot.docs;
    }

  } catch (error) {
    res.status(500).json({ error: "Something went wrong", message: error });
  }
}
