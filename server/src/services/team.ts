import Team from 'models/Team';

export async function createTeam(name: string) {
  return Team.create({ name: name.toLocaleLowerCase() });
}

export async function getTeamById(id: string) {
  return Team.findOne({ id });
}

export async function getTeamByName(name: string) {
  return Team.findOne({ name });
}
