import { CharacterEntityApi } from './character-collection.api-model';
import { graphqlClient } from 'core/api';
import { gql } from 'graphql-request';

interface GetCharacterCollection {
  characters: {
    info: { pages: number };
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        info {
          pages
        }
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

  const { info, results } = await graphqlClient
    .request<GetCharacterCollection>(query)
    .then((res) => res.characters);

  return { info, results };
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
