const mongoose = require('mongoose');

const StudentModel = require('./models/students.model')

// WHen you want to get data from a json file
// No need to parse it 
//let companies = require('./companies.json')


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        console.log('Yayyyy Mongoose works!')

        //You can do this as well, to clear the DB !
        // We are only doing this so that we dont have duplicates. NEVER TO BE DONE IN REAL LIFE

        //return StudentModel.deleteMany()
        return mongoose.connection.dropDatabase()    
    })
    .then(() => {

        // ----------- Add a single document in the DB --------- 
        // StudentModel.create({name: 'Manish'}) 

        

        // ---------  Add multiple documents in the DB --------- 
        
        let names = [ {name: 'Pablo', isHappy: true}, {name: 'Yanis', age: 22}, {name: 'Julie', age: 23}]
        return StudentModel.insertMany(names)
        
    })
    .then((result) => {
        //console.log(result)    

        // -----------------------------------------------
        // -----------Find an element --------------------
        // -----------------------------------------------
        // You will get an array of elements back

        /*
        StudentModel.find({ age: { $gt: 21} })
            .then((findResult) => {
                console.log(findResult)
            })
        */    

        // StudentModel.findById
        // StudentModel.findOne

        // -----------------------------------------------
        //   Update
        // -----------------------------------------------
        
        // -----------------------------------------------
        // Always returns the old data
        // -----------------------------------------------

    
        StudentModel.findOneAndUpdate({ age: 22}, {isHappy: false}, {new: true})
            .then((findResult) => {
                console.log(findResult)
            })
        

        //StudentModel.findByIdAndUpdate



        //   Delete

        // -----------------------------------------------
        // Always returns the old data
        // -----------------------------------------------
        /*
        StudentModel.findOneAndDelete()
        StudentModel.findByIdAndDelete()
        */
    })
    .catch((err) => {
        console.log('Something went wrong', err)
    })

    