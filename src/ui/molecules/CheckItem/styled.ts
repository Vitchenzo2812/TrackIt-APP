import styled, { css } from "styled-components";

export const Container = styled.div<{ canCheck: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  ${({ canCheck }) => canCheck && css`
    cursor: pointer;
  `}
`;