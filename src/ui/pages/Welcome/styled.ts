import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7f5;
  min-height: 100dvh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  margin: 0rem 0.4rem;
`;

export const WrapperComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 8rem 2.4rem;
  margin: 0rem 1rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`;

export const WrapperCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 9rem;
`;

export const ContainerItemsInCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const BackgroundIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.6rem;
  height: 5.6rem;
  background-color: color-mix(in oklab, #E76F51 10%, transparent);
  border-radius: 1.6rem;
`;