import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getCharacterPages } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pages, setPages] = React.useState<number>();

  const loadCharacterCollection = (page: number) => {
    getCharacterCollection(page).then((result) => {
      setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    });
  };

  const loadCharacterPages = () => {
    getCharacterPages().then((result) => {
      console.log('Result Pages', result);
      setPages(result);
    });
  };

  return {
    characterCollection,
    pages,
    loadCharacterCollection,
    loadCharacterPages,
  };
};
