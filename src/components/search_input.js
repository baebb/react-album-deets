import React from 'react';
import { FormGroup, FormControl, Alert } from 'react-bootstrap';

const SearchInput = (props) => {
  return (
    <div>
      <FormGroup>
        <FormControl
          type="text"
          value={props.searchText}
          placeholder="Album title eg. 'Dark side of the Moon'"
          onChange={props.handleChange}
        />
      </FormGroup>
      {props.searchError === 'NO_INPUT' ?
        <Alert bsStyle="danger">Please enter a search phrase</Alert>
        : null
      }
    </div>
  )
};

export default SearchInput;