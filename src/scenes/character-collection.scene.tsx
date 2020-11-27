import * as React from 'react';
import { AppLayout } from 'layouts';
import {
  CharacterCollectionContainer,
  NumberPageContextProvider,
} from 'pods/character-collection';

export const CharacterCollectionScene = () => (
  <AppLayout>
    <NumberPageContextProvider>
      <CharacterCollectionContainer />
    </NumberPageContextProvider>
  </AppLayout>
);
