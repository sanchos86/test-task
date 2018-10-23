import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

import { ucFirst } from 'utils/helpers';

const InputField = ({ input, type, name, meta: { touched, error } }) => (
  <FormGroup>
    <Label htmlFor={`${input.name}Field`}>{ucFirst(input.name)}</Label>
    <Input
      {...input}
      placeholder={ucFirst(input.name)}
      type={type}
      id={`${input.name}Field`}
      className={(touched && error) ? 'is-invalid' : ''}
    />
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired
};

export default InputField;
