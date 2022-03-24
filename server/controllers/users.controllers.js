const User=require('../models/userModel')

module.exports={

    create: async (req,res)=>{

        console.log("==>",req.body)

        const user=await User.create({
            name:req.body.name,
            attendance:req.body.attendance,
            time:req.body.time
        }).then(()=>{

            res.send({message:"Successfully Created"})
        }).catch((err)=>{
            console.log(err)
            res.status(404).send({message:"Something Went Wrong"})
        })
    },
}
