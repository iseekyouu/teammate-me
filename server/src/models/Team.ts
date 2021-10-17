import mongoose from 'lib/db';

export interface ITeam {
  id: string;
  name: string;
}

const schema = new mongoose.Schema<ITeam>({
  name: { type: String, required: true, unique: true },
},
{ timestamps: true });

export default mongoose.model('Team', schema, 'team');
