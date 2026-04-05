import styled, { css } from "styled-components";

export const HoverCard = styled.div<{ hover: boolean }>`
  transition: transform 0.3s ease-in-out;

  ${({ hover }) => hover && css`
    &:hover {
      transform: translateY(-1rem);
    }
  `}
`;

export const Container = styled.div`
  padding: 3.2rem;
  background-color: #FFFFFF;
  border: rgba(0, 0, 0, 0.05) 0.1rem solid;
  border-radius: 1rem;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;