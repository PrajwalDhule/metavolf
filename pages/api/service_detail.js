import {doc, getDoc} from "firebase/firestore";
import {
    serviceCollection, 
    paymentCollection,
    taskCollection } 
    from "../../constants/firebase_constants.js";
import {db} from "../../firebase/clientApp.js";


export default async function handler(req, res ) {
    const {serviceID} = req.body;
    try {
        var docRef = doc(db,serviceCollection,serviceID);
        var docSnap = await getDoc(docRef);       
        var result = docSnap.data();
        // fetching all details related to payment 
        // check if result.servicePaymentID is null or not
        if(result.servicePaymentID == null){
            throw "cant get Payment ID";
        }
        var paymentID = result.servicePaymentID.toString();
        var paymentRef = doc(db,paymentCollection,paymentID);  
        var paymentSnap = await getDoc(paymentRef);
        var paymentData = paymentSnap.data();  
        // fetching all tasks related to service 
        //check if result.serviceTasks is null or not
        if(result.serviceTasks == null){
            throw "cant get Tasks ID";
        }
        var tasksID = result.serviceTasks;
        var tasks= [];
        console.log(tasksID);    
        for(var task in tasksID){
            var taskRef = doc(db,taskCollection,tasksID[task]);
            var taskSnap = await getDoc(taskRef);
            var taskData = taskSnap.data();
            tasks.push(taskData);
        }
        res.status(200).json({
            serviceData: result,    
            servicePaymentData: paymentData,
            tasks: tasks
        });

    } catch (error) {
        res.status(500).json({
            error: "Error occured!", message: error});
    }
}
