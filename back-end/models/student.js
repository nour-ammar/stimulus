var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email : {type:String,require:true},
    phone:{type:String,required:true},
    level:{type:String,required:true},
    classe:{type:String,required:true},
    levelOfApp:{type:String,required:true},
    pack:{type:String,required:true},
});

module.exports = mongoose.model('Student',schema);