export default function(values) {
  const errors = {};

  if (!values.get('name')) {
    errors.name = 'Name is required';
  } else if (values.get('name').length > 10) {
    errors.name = 'Name must be less 11 characters';
  }

  if (!values.get('email')) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email format';
  }

  return errors;
}