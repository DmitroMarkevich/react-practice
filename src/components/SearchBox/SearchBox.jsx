import {useState} from "react";
import PropTypes from "prop-types";
import {Button, Form, Input, Wrapper} from "./SearchBox.styled";

export const SearchBox = ({onSubmit}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (trimmedInput === '') {
      alert('Please enter a plant name!');
      return;
    }

    onSubmit(trimmedInput);
    setInput('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Bombycilla (for example)"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
