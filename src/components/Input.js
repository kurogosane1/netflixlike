import React from "react";
import {
  InputContainer,
  InputLabel,
  InputTextContainer,
  InputPasswordContainer,
} from "../styles";

function Input({ types, Label }) {
  return (
    <InputContainer>
      <InputLabel labelled={Label} />
      <InputTextContainer type={types} />
    </InputContainer>
  );
}

export default Input;
