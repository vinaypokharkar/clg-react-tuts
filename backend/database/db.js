const mongoose = require('mongoose')

const dbConnect = async() => {
    await mongoose.connect('mongodb+srv://pokharkarvinay2005:Vinay_2005@newcluster.3ctc3.mongodb.net/test?retryWrites=true&w=majority&appName=newCluster')
} 

module.exports = dbConnect;