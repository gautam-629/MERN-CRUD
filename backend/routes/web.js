import express from "express";
import StudentController from '../controllers/StudentController.js'
let router=express.Router()

router.get('/getAll',StudentController.getAllDoc);
router.post('/create',StudentController.createDoc);
router.get('/getsingle/:id',StudentController.getSingleDocByID);
router.delete('/delete/:id',StudentController.deleteDocById);
router.put('/update/:id',StudentController.updateDocById);
export default router;