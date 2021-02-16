var mongoose =require('mongoose');
var schema=mongoose.Schema;


var userschema=new schema(
    {
        name :
        {
            type:String,
        
        },
        googleid :
        {
            type:String,
        }
    }
);

var user=mongoose.model('user',userschema);

module.exports=user;
