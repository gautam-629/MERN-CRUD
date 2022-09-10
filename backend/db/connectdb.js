import mongoose from "mongoose";
const connectdb= async(DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL,{dbName:'school'});
        console.log("connected Sucessfully");
    } catch (error) {
        console.log(error)
    }
}
export default connectdb;