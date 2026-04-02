import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7f5;
  height: 100%;
  min-height: 100dvh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  margin: 0rem 0.4rem;
`;

export const BrandName = styled.span`
  font-size: 2.4rem;
  color: #2E2E2E;
  font-weight: 500;
`;

export const WrapperComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 8rem 2.4rem;
  margin: 0rem 1rem;
`;

export const Title = styled.h1`
  font-size: 6rem;
  color: #2E2E2E;
  font-weight: 500;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 5rem;
  }
`;

export const OrangeTitle = styled.span`
  color: #E76F51;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: #7A7A7A;
  text-align: center;
  line-height: calc(1.75 / 1.25);

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
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

export const CardTitle = styled.h3`
  color: #2E2E2E;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const CardDescription = styled.p`
  color: #7A7A7A;
  font-size: 1.6rem;
  white-space: break-spaces;
  text-align: center;
`;

export const HoverCard = styled.div`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1rem);
  }
`;