const mongoose=require("mongoose");
const authConnection=async()=>{
    await mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("DB CONNECTED")
    })
}
module.exports=authConnection