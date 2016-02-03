/**
 * Created by HB02 on 2016-02-03.
 */
// binding modules
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

// declare task schema

var taskSchema = new Schema({
    status : {type : String,default : 'TO-DO'},
    contents : String,
    createDate : {type : Date, default : Date.now},
    author : {type : String,default:'Chris'}
});

// exports model for taskController

module.exports = mongoose.model('Task',taskSchema);
