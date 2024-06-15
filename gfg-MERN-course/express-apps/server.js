const express= require('express');
const bp=require('body-parser');
var _=require('underscore');

const app=express();
app.use(bp.json());

var uid=0;


let userData=[
    
];

app.get('/loaduser',(req,res)=>{
    res.send(userData);
});

app.get('/finduser/:id',(req,res)=>{
    var uid=parseInt(req.params.id);
    // console.log(uid);
    
    var foundData=_.findWhere(userData,{id:uid});
    if(foundData) res.send(foundData);
    else res.send('No user found');

})

app.delete('/deleteuser/:id',(req,res)=>{
    var uid=parseInt(req.params.id);
    // console.log(uid);
    
    var foundData=_.findWhere(userData,{id:uid});
    if(foundData){
        userData=_.without(userData,foundData);
        res.send('User deleted successfully');
    } 
    else res.send('No user found');

})


app.post('/adduser',(req,res)=>{
    var {username,email}=req.body;
    var udata={id:++uid,username,email};
    userData.push(udata);
    res.send(`user added successfully`);
})

app.put('/updateuser/:id',(req,res)=>{
    var uid=parseInt(req.params.id);
    var {username,email}=req.body;

    var foundData=_.findWhere(userData,{id:uid});
    if(foundData){
        foundData.username=username || foundData.username;
        foundData.email=email || foundData.email;
        res.send('User updated successfully');
    } 
    else res.send('No user found');
})








///projects task given by sir.


let pid=0;

let projectData=[
    {
        id:++pid,
        name:'Project 1',
        location:'Mumbai'
    },
    {
        id:++pid,
        name:'Project 2',
        location:'Pune'
    }
    
];

app.get('/loadprojects',(req,res)=>{
    res.send(projectData);
});



app.post('/addproject',(req,res)=>{
    var {name,location}=req.body;
    var pdata={id:++pid,name,location};
    projectData.push(pdata);
    res.send(`project added successfully`);
})




app.use(express.static('public')); //serving the (by default) index.html file which is in the public folder

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})
