const mongoose=require('mongoose');

const db=async()=>{
    try{
           const conn= await mongoose.connect(process.env.MONGO_URL,{useUnifiedtopology:true,useNewUrlParser:true});
           console.log("connection successfully");
    }catch(e)
    {
        console.log(e);
    }
}

module.exports=db;