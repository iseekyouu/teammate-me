import User from "models/User"

type TCreateUserParams = {
  username: string;
  password: string;
}

export async function createUser({ username, password }: TCreateUserParams) {
  return User.create({ username, password });
}

export async function getUser(id: string) {
  return User.findById(id);
}