import React from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import InputField from './core/InputField';
import validate from 'utils/validate';

const UserForm = ({ handleSubmit }) => (
  <>
    <h3 className="text-center mt-4">Add User</h3>
    <Form onSubmit={handleSubmit} className="my-4">
      <Field type="text" name="name" component={InputField} />
      <Field type="email" name="email" component={InputField} />
      <FormGroup>
        <Button type="submit" color="info">
          Add User
        </Button>
      </FormGroup>
    </Form>
  </>
);

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'UserForm',
  validate
})(UserForm);
