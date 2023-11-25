const express=require('express')
const router =express.Router()
const multer=require('multer')
// const Admin =require('../middleware/Admin')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, 'uploads/dummy')
   },
   filename: function (req, file, cb) {
     const uniqueSuffix = Date.now();
     cb(null, uniqueSuffix + '-' + file.originalname)
   }
 })
 
const upload = multer({ storage: storage })
const {Insert}= require('../controller/images')
router.post('/insert',upload.array('image'),Insert)

// router.get('/view',Admin,View)
// router.get('/singleview/:id',Singleview)
// router.delete('/delete/:id',Delete)
// router.put('/update/:id',Update)

module.exports= router;