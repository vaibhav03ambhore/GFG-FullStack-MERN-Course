const express= require('express');

const app=express();

let userData=[
    {
        username:'admin',
        email:'admin@gmail.com'
    },
    {
        username:'vaibhav03',
        email:'vaibhav@gmail.com'
    },
    {
        username:'manager',
        email:'manager@gmail.com'
    }
];

app.get('/loaduser',(req,res)=>{
    res.send(userData);
});




app.use(express.static('public')); //serving the (by default) index.html file which is in the public folder

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})