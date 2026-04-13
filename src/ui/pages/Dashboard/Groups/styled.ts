import styled from "styled-components";

export const WrapperAllItems = styled.div`
  width: 100%;
  max-width: 121.4rem;

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .group {
    border-top: rgb(231, 111, 81) 0.8rem solid;
    padding: 2.4rem;
    width: 36.8rem;
  }
`;

export const WrapperHeaderGroups = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.4rem;
`;

export const WrapperHeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const WrapperGroups = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.6rem;
`;