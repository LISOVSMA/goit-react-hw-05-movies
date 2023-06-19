import PropTypes from 'prop-types';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Form, Icon } from './SearchMovie.styled';

export const SearchMovie = ({ onChange, errorMessage }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return errorMessage();
    onChange(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Movie Search</h3>
      <DebounceInput
        type="text"
        name="query"
        debounceTimeout={500}
        value={query}
        onChange={changeQuery}
        placeholder="enter movie name"
      />
      <Icon />
    </Form>
  );
};

SearchMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.func.isRequired,
};
