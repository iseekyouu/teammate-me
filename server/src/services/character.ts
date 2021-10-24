import { getUserById } from 'services/user';
import assert from 'http-assert';
import Character from 'models/Character';

type TCreateCharacterParams = {
  name: string,
  userId: string,
  ownerUserId: string,
}

export async function createCharacter({
  name, userId, ownerUserId,
}: TCreateCharacterParams) {
  assert(await getUserById(userId), 404, 'user not found');
  assert(await getUserById(ownerUserId), 404, 'owner not found');

  return Character.create({ name, userId, ownerUserId });
}

export async function getCharactersByOwner(ownerId: string) {
  return Character.find({ id: ownerId });
}
