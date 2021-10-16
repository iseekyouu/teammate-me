import User from 'models/User';

type TCreateUserParams = {
  username: string;
  password: string;
}

export async function createUser({ username, password }: TCreateUserParams) {
  return User.create({ username, password });
}

export async function getUser(username: string, password: string) {
  return User.findOne({ username, password });
}
