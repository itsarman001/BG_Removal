import mongoose from 'mongoose';

const connectDB = async () => {
  // Listen for successful connection
  mongoose.connection.on('connected', () =>
    console.log('Connected to database')
  );

  // Connect to MongoDB
  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
};

export default connectDB;
