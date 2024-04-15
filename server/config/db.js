const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL;

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://nyzelcayat27:LEsBn5wOX8ebd2xi@cluster0.n9cu5x3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


        console.log('Connection of Database: Success');
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDb;