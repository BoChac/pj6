const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb+srv://bodo:123@cluster0.oqnwz.mongodb.net/test?retryWrites=true&w=majority');
        console.log('succesfull');
    } catch (error) {
        console.log('fail');
        
    }

}

module.exports = {connect}