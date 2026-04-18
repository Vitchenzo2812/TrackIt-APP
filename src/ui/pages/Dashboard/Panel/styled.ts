import styled from "styled-components";

export const WrapperAllItems = styled.div`
  width: 100%;
  max-width: 121.4rem;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const WrapperTitleButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3.2rem;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const WrapperTitleTasks = styled(WrapperTitleButtons)`
  margin-bottom: 1.6rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 770px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const WrapperTitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 39.4rem));
  gap: 1.6rem;
  padding-bottom: 3.2rem;
  width: 100%;

  .padding-bottom {
    padding-bottom: 1.6rem;
  }

  .responsive-panel-card {
    max-width: 39.4rem;
    width: 100%;
    justify-self: center;
  }

  .responsive-panel-tasks-card {
    max-width: 39.4rem;
    width: 100%;
    justify-self: center;
  }

  @media (max-width: 852px) {
    grid-template-columns: 1fr;

    .responsive-panel-card,
    .responsive-panel-tasks-card {
      max-width: 100%;
    }
  }
`;

export const WrapperSectionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const WrapperCardTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const WrapperCheckItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 8.6rem;
  overflow-y: auto;
`;