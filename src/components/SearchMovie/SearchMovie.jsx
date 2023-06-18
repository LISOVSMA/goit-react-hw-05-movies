import propTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { Form, Icon } from './SearchMovie.styled';

export const SearchMovie = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Movie Search</h3>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="enter movie name"
      />
      <Icon />
    </Form>
  );
};

SearchMovie.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
