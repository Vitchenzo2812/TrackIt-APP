import { Trash2Icon } from "lucide-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 1rem;
`;

export const WrapperChipAndDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
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
    background-color: #f5f5f5;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 2.4rem;
`;