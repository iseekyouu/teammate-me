import User from 'models/User';
import { USER_ROLE_USER } from 'lib/constants';

type TCreateUserParams = {
  username: string;
  password: string;
  role?: string;
  team?: string;
}

type TUpdateUserParams = {
  team?: string;
  role?: string;
}

export async function createUser({
  username, password, team, role = USER_ROLE_USER,
}: TCreateUserParams) {
  return User.create({
    username, password, team, role,
  });
}

export async function authenticateUser(username: string, password: string) {
  return User.findOne({ username, password });
}

export async function getUserById(userId: string) {
  return User.findOne({ id: userId });
}

export async function updateUser(userId: string, params: TUpdateUserParams) {
  return User.updateOne({ userId, $set: params });
}
