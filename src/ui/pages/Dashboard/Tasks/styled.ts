import styled from "styled-components";

export const WrapperAllItems = styled.div`
  width: 100%;
  max-width: 89.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 0 auto;
`;

export const WrapperHeaderTasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperHeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const WrapperFilterCards = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const WrapperFilters = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4rem;
  gap: 0.8rem;
`;

export const WrapperFilterStatus = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 35rem;
  align-items: center;

  overflow: hidden;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  user-select: none;

  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const WrapperFilterGroups = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 31.2rem;

  overflow: hidden;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  user-select: none;

  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const WrapperTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;