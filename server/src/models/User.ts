import mongoose from 'lib/db';

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  team: { type: String},
}, {
  timestamps: true,
});

export default mongoose.model('User', schema, 'user');
