import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data);
};

export const saveCharacter = async (hotel: Character): Promise<boolean> => {
  return true;
};
