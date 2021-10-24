import Team from 'models/Team';

export async function createTeam(name: string) {
  return Team.create({ name: name.toLowerCase() });
}

export async function getTeamById(id: string) {
  return Team.findOne({ id });
}

export async function getTeamByName(name: string) {
  return Team.findOne({ name: name.toLowerCase() });
}

export async function getTeams() {
  return Team.find();
}
