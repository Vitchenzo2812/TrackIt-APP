import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7f5;
  height: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #2E2E2E;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: #7A7A7A;
`;

export const WrapperInputsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 33rem;

  @media (min-width: 550px) {
    width: 44.8rem;
  }

  @media (max-width: 410px) {
    width: 30rem;
  }

  @media (max-width: 380px) {
    width: 20rem;
  }
`;

export const WrapperButtonsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 4.2rem;
`;