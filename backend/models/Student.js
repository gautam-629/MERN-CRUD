import mongoose from 'mongoose'

// define schema
let studentSchema=new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number ,required:true,trim:true},
    address:{type:String,required:true,trim:true}
})

//model
const studentModel=mongoose.model('student',studentSchema);

export default studentModel;