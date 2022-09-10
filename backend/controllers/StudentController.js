import studentModel from '../models/Student.js';
import CustomErrorHandler from '../services/CustomErrorHandler.js';
import Joi from 'joi';
class StudentController {
    static getAllDoc = async(req, res, next) => {
        let result;
          try {
               result=await studentModel.find()
              .select('-updatedAt -__v')
              .sort({ _id: -1 });
          } catch (error) {
              return next(CustomErrorHandler.ServerError())
          }
          return res.json(result);
    }
    static createDoc = async (req, res, next) => {
        //validation
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            age: Joi.number().min(3).max(50).required(),
            address: Joi.string().min(3).max(30).required()
        })
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return next(error);
        }
        try {
            const { name, age, address } = req.body;
            const doc = new studentModel({
                name,
                age,
                address
            })
            const result = await doc.save();
            res.status(201).json(result);
        } catch (error) {
            return next (CustomErrorHandler.ServerError());
        }
    }   

    // getSingleDocByID
   static async getSingleDocByID(req,res,next){
       let document;
           try {
               document=await studentModel.findById(req.params.id)
               .select('-updatedAt -__v')
               .sort({ _id: -1 });

           } catch (error) {
               return next(CustomErrorHandler.ServerError())
           }
           return res.json(document);
    }
    // deleteDocById
    static async deleteDocById(req,res,next){
        let document;
        try {
            document=await studentModel.findByIdAndDelete(req.params.id);
        } catch (error) {
            return next(CustomErrorHandler.ServerError())
        }
        console.log(document);
        return res.status(204).json(document);
    }

     // updateDocById
     static async updateDocById(req,res,next){
        let document;
        try {
            document=await studentModel.findByIdAndUpdate(req.params.id,req.body);
        } catch (error) {
            return next(CustomErrorHandler.ServerError());
        }
        return res.json(document);
    }

}
export default StudentController;