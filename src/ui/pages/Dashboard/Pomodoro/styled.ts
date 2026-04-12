import styled from "styled-components";

export const WrapperAllItems = styled.div`
  width: 100%;
  max-width: 121.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  gap: 3.2rem;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const ContainerItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleTimer = styled.div`
  background-color: color-mix(in oklab, #E76F51 10%, transparent);
  border-radius: calc(infinity * 1px);
  padding: 0.8rem 2.4rem;
  margin-bottom: 3.2rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  border: rgba(0, 0, 0, 0.05) 0.1rem solid;
  margin-top: 4.8rem;
  margin-bottom: 3.2rem;
  border-radius: 1rem;

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const WrapperInfoBlocks = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerHints = styled.div`
  width: 100%;
  max-width: 67.2rem;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  gap: 0.8rem;
  border: color-mix(in oklab, #E76F51 10%, transparent) 0.1rem solid;
  background-color: color-mix(in oklab, #E76F51 5%, transparent);
  border-radius: 1.6rem;
`;