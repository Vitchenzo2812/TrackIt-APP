import { Trash2Icon } from "lucide-react";
import styled, { css } from "styled-components";

export const Container = styled.div<{ 
  $canCheck: boolean,
  $hasDescrption: boolean
}>`
  display: flex;
  gap: 0.8rem;
  
  ${({ $canCheck }) => $canCheck && css`
    cursor: pointer;
  `}
  ${({ $hasDescrption }) => !$hasDescrption && css`
    align-items: center;
  `}
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const WrapperTitleStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const DeleteIcon = styled(Trash2Icon)`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.3rem;
  color: #7a7a7a;
  cursor: pointer;
  border-radius: 40%;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
    background-color: #f5f5f5;
  }
`;