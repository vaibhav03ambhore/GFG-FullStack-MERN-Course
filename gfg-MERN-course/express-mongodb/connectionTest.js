const mongoose = require('mongoose');

// const uri="mongodb+srv://adminn:adminn123@cluster0.mrkhrfm.mongodb.net/gfg-db?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(uri)

const userSchema= mongoose.Schema({
    name: String,
    email: String
})

// const user1=new user({name:'vaibhav', email:'a@gmail.com'})

// user1.save().then(()=>(console.log(`user added`)));

module.exports=mongoose.model("User",userSchema);

