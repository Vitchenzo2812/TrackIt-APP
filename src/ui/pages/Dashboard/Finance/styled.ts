import styled, { css } from "styled-components";

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

export const WrapperTitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 39.4rem));
  gap: 1.6rem;
  padding-bottom: 3.2rem;
  width: 100%;

  .padding-bottom {
    padding-bottom: 1.6rem;
  }

  .responsive-finance-card {
    width: 100%;
  }

  @media (max-width: 852px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperSectionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const WrapperTitleMonthlyExpenses = styled(WrapperTitleButtons)`
  justify-content: flex-start;
  margin-bottom: 1.6rem;
  gap: 0.8rem;
`;