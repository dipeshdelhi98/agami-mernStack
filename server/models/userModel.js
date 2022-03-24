const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    attendance:{
        type:String
    },
    time:{
        type:String
    }

});

const userModel=mongoose.model('users',userSchema);

module.exports=userModel

