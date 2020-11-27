import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { NumberPageContext } from './character-collection.context';
import { Pagination } from '@material-ui/lab';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    pages,
    loadCharacterCollection,
    loadCharacterPages,
  } = useCharacterCollection();
  const history = useHistory();

  const pageNumberContext = React.useContext(NumberPageContext);

  React.useEffect(() => {
    loadCharacterCollection(pageNumberContext.numberPage);
    loadCharacterPages();
  }, []);

  React.useEffect(() => {
    loadCharacterCollection(pageNumberContext.numberPage);
    console.log('usesEffect - ', pageNumberContext.numberPage);
  }, [pageNumberContext.numberPage]);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection(pageNumberContext.numberPage);
  };

  const handleChange = (event, value) => {
    pageNumberContext.setNumberPage(value);
  };

  return (
    <>
      <Pagination
        count={pages}
        onChange={handleChange}
        page={pageNumberContext.numberPage}
      />
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        pages={pages}
        onCreateCharacter={handleCreateCharacter}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Pagination
        count={pages}
        onChange={handleChange}
        page={pageNumberContext.numberPage}
      />
    </>
  );
};
