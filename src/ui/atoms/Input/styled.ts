import styled from "styled-components";

export const WrapperLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: #2E2E2E;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  background-color: #FAFAFA;
  border-radius: 1.6rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  border-color: transparent;
  transition: all 0.2s ease-in-out;

  &:focus {
    border: #E76F51 0.1rem solid;
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 0 #0000,
      0 0 0 calc(2px + 0px) color-mix(in oklab, #E76F51 20%, transparent),
      0 0 #0000;
  }
`;