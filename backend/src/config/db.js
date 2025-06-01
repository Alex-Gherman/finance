import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Configure dotenv to load environment variables
dotenv.config();

const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default dbConfig;