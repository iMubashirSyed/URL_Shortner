import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully');
    console.log("Mongo URI:", process.env.MONGO_URI);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connectToMongoDB;