const express= require('express');

const app=express();

app.use(express.static('public')); //serving the (by default) index.html file which is in the public folder

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})