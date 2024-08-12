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

    if (input.trim() === '') {
      alert('Enter the movie title!');
      return;
    }

    onSubmit(input);
    setInput('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
