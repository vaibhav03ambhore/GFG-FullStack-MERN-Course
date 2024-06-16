const User = require('./models/model');

const express = require('express');
const bp= require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bp.json());

const uri = "mongodb+srv://adminn:adminn123@cluster0.mrkhrfm.mongodb.net/gfg-db?retryWrites=true&w=majority&appName=Cluster0";


app.post('/addUser', (req,res)=>{
    const user = new User({...req.body});
    user.save().then(()=>res.send(`User ${user.name} added`)).catch((err)=>res.send(err))
})

app.get('/getUsers', async(req,res)=>{
    const users= await User.find();
    res.send(users);
})

app.get('/getUser/:id', async(req,res)=>{
    const user= await User.findById({_id: req.params.id});
    res.send(user);
})

const startServer= async()=>{
    ((await mongoose.connect(uri).then(()=>console.log("Connected to database"))))
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
}

startServer();



