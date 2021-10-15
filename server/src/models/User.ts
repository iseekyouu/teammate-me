import mongoose from "lib/db";

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});


export default mongoose.model('User', schema, 'user');