import { PenIcon, Trash2Icon } from "lucide-react";
import styled from "styled-components";

export const HeaderCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.8rem 0rem 1.6rem 0rem;
`;

export const BackgroundGroupIcon = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.6rem;
  padding: 1.4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ $color }) => $color};
    opacity: 0.082;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const EditIcon = styled(PenIcon)`
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

  @media (max-width: 430px) {
    width: 2.8rem;
    height: 2.8rem;
  }
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

  @media (max-width: 430px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const WrapperContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Divisor = styled.div`
  border-top: rgba(0, 0, 0, 0.05) 0.1rem solid;
`

export const WrapperTotalTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;