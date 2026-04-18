import { Trash2Icon } from "lucide-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FAFAFA;
  border-radius: 1.6rem;
  padding: 1.6rem;
`;

export const WrapperSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const WrapperLastSection = styled(WrapperSection)`
  gap: 1.6rem;
`;

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
    background-color: #ffffff;
  }

  @media (max-width: 430px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;