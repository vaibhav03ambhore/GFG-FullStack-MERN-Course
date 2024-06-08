const express=require('express');
const bp= require('body-parser');
const jwt=require('jsonwebtoken')
const config=require('./config.json')
var tokenChecker= require('./tokenChecker.js')

const router=express.Router();
const app=express();
app.use(bp.json())

const port =config.port;

router.get('/secure',tokenChecker,(req,res)=>{
    res.send('secured url accessed')
})

router.post('/login',(req,res)=>{
    const postData=req.body;
    console.log(postData);

    const user={
        "name": postData.name,
        "email": postData.email
    }
    const token= jwt.sign(user,config.secret,{expiresIn: config.tokenlife})

    const response={
        "status": "logged In",
        'token': token
    }

    res.send(response)
})

app.use('/api',router);


app.listen(3000,()=>{
    console.log('server is running on port ' + port);
})