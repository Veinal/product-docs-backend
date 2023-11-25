const express=require('express')
const router =express.Router()
const multer=require('multer')
const storage = multer.diskStorage({
     destination: function (req, file, cb) {
      cb(null, 'uploads/admin')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

const {Register,Login,View,SingleAdminView}= require('../controller/register')
router.post('/register',upload.single('image'),Register)
// router.post('/register',Register)
router.post('/login',Login)
router.get('/view',View)
router.get('/singleadminview/:id',SingleAdminView)

module.exports= router;