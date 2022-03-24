const express=require('express');

const router=express.Router();

const {create}=require('../controllers/users.controllers')

router.post('/',create);


module.exports=router

