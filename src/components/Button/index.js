import { ButtonContainer } from "./styles";

export const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}  {/* Acessando a prop 'label' */}
    </ButtonContainer>
  );
};
