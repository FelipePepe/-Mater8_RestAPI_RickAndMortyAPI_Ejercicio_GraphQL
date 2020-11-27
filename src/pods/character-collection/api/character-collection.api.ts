import { CharacterEntityApi } from './character-collection.api-model';
import { graphqlClient } from 'core/api';
import { gql } from 'graphql-request';

interface Pages {
  characters: {
    info: {
      pages: number;
    };
  };
}

interface GetCharacterCollection {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterPages = async (): Promise<number> => {
  const query = gql`
    query {
      characters {
        info {
          pages
        }
      }
    }
  `;

  const { pages } = await graphqlClient
    .request<Pages>(query)
    .then((res) => res.characters.info);

  return pages;
};

export const getCharacterCollection = async (
  page: number
): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
      characters(page: ${page}) {
        results {
          id
          name
          type
          gender
          image
          status
          species
        }
      }
    }
  `;

  const { results } = await graphqlClient
    .request<GetCharacterCollection>(query)
    .then((res) => res.characters);

  return results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
