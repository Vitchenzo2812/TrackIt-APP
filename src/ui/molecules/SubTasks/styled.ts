import styled, { keyframes } from "styled-components";

export const Container = styled.div``;

export const expand = keyframes`
  from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-0.5rem);
  }
  to {
    max-height: 50rem;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const collapse = keyframes`
  from {
    max-height: 50rem;
    opacity: 1;
    transform: translateY(0);
  }
  to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-0.5rem);
  }
`;

export const WrapperSubTasks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-left: 2rem;
  padding-left: 0.8rem;
  border-left: #F5F5F5 0.2rem solid;

  overflow: hidden;

  max-height: ${({ $isOpen }) => ($isOpen ? '50rem' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-0.5rem)'};

  margin-top: ${({ $isOpen }) => ($isOpen ? '1.45rem' : '0')};

  transition: 
    max-height 0.25s ease,
    opacity 0.2s ease,
    transform 0.2s ease,
    margin-top 0.2s ease;
`;