import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {MONGO_URI, MONGO_NAME} = process.env;

const initDB = () => {
    mongoose.connect(MONGO_URI);

    mongoose.connection.once('open', () => {
        console.log('connected to the database');
    });

    mongoose.connection.on('error', console.error);
}

export default initDB;