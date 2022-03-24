const express=require('express');

const app=express();
const PORT=3001;
const URL='mongodb+srv://root:root@cluster0.9gwkj.mongodb.net/agami?retryWrites=true&w=majority'
const mongoose=require('mongoose');
const userRoutes=require('./routes/users.routes')

mongoose.connect(URL,()=>{
    console.log("Database connected....")
});

app.use(express.json());

app.use('/users',userRoutes);

app.listen(PORT,()=>{

    console.log("Server is running....")

})