import { InputContainer } from "./styles";

// Aqui fazemos a desestruturação da prop `value`
export const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} type="text" />
    </InputContainer>
  );
};
