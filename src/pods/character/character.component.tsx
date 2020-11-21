import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button, Avatar } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  console.log(character);

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <img src={character.image} className={classes.image} />
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="type" label="Type" />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent name="origin.name" label="Origin" />
          <TextFieldComponent name="location.name" label="Location" />
          <TextFieldComponent name="created" label="Created" />
          <TextFieldComponent name="comments" label="Comments" multiline />
          {/* <div className={classes.selectView}>
            <SelectComponent
              name="episode"
              label="Episodes"
              items={character.episode}
            />
            <Button color="primary">View</Button>
          </div> */}
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
