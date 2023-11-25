const express=require('express')
const router =express.Router()

const {Insert,View}= require('../controller/category')
router.post('/insert',Insert)
router.get('/view',View)

module.exports=router