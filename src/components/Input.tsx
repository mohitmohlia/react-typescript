import React from "react";

type InputProps = {
  value: string;
  handleChange: (input: string) => void;
};
function Input(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(event.target.value);
  };
  return <input type="text" onChange={handleInputChange}></input>;
}

export default Input;
