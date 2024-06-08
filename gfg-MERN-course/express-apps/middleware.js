var middleware={
    logger: function(req,res,next){
        console.log('Request' + new Date().toString() + " " + req.method + " " +req.originalUrl );
        next()
    },
    requireAuth: function(req,res,next){
        console.log('private route ');
        next()
    }
}

module.exports=middleware;