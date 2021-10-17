import User, { IUser } from 'models/User';
import { USER_ROLE_USER } from 'lib/constants';
import { getTeamByName } from 'services/team';
import { ITeam } from 'models/Team';

type TCreateUserParams = {
  username: string;
  password: string;
  role?: string;
  teamName?: string;
}

type TUpdateUserParams = {
  teamName?: string;
  role?: string;
}

export async function createUser({
  username, password, teamName = 'other', role = USER_ROLE_USER,
}: TCreateUserParams) {
  const team: ITeam = teamName && await getTeamByName(teamName);
  return User.create({
    username, password, team: team && team.id, role,
  });
}

export async function authenticateUser(username: string, password: string) {
  return User.findOne({ username, password });
}

export async function getUserById(userId: string) {
  return User.findOne({ id: userId }).populate('team');
}

export async function updateUser(
  user: IUser,
  { role, teamName }: TUpdateUserParams,
) {
  const team: ITeam = teamName && await getTeamByName(teamName);
  return User.updateOne({ id: user.id }, { role, team: team && team.id });
}
