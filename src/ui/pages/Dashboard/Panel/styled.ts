import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 100dvh;
  background-color: #fafafa;
`;

export const WrapperPage = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperAllItems = styled.div`
  width: 100%;
  max-width: 121.4rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding: 10.5rem 2.4rem;
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
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
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

  @media (max-width: 770px) {
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

export const IconCard = styled.div<{ color: 'green' | 'red' | 'orange' }>`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ color }) => {
    switch (color) {
      case 'green':
        return css`
          background-color: color-mix(in oklab, #36BA98 10%, transparent);
        `;

      case 'red':
        return css`
          background-color: color-mix(in oklab, #E76F51 10%, transparent);
        `;

      case 'orange':
        return css`
          background-color: color-mix(in oklab, #F4A261 10%, transparent);
        `;
    }
  }}
`;

export const WrapperCheckItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 8.6rem;
  overflow-y: auto;
`;