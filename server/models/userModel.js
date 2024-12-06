import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  emailId: { type: String, required: true, unique: true },
  profilePicture: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;