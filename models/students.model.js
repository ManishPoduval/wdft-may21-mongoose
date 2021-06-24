const mongoose = require('mongoose');


//Create a schema
let StudentSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    age: {
        type: Number,
   
    },
    isHappy: {
        type: Boolean,

    }    
})

// create a new collection/model 

let StudentModel = mongoose.model('student', StudentSchema)

module.exports = StudentModel