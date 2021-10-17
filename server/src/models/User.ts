import mongoose from 'lib/db';
import { Schema } from 'mongoose';

export interface IUser {
  id: string
  username: string;
  password: string;
  role: string;
  team?: string;
}

const schema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
}, {
  timestamps: true,
});

export default mongoose.model('User', schema, 'user');
