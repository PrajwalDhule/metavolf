import {collection, query, where, getDocs} from "firebase/firestore";
import {serviceCollection} from "../../constants/firebase_constants.js";
import {db} from "../../firebase/clientApp.js";


export default async function handler(req, res ) {
    const {email } = req.body;
    try {
        var collectionRef = collection(db,serviceCollection);
        var queryRef = query(collectionRef,where("serviceUserEmailID","==",email));
        var querySnapshot = await getDocs(queryRef);
        var result = [];
        querySnapshot.forEach(element => {
            result.push(element.data());
        });
        res.status(200).json({data: result});

    } catch (error) {
        res.status(500).json({
            error: "Something went wrong", message: error});
    }
}
