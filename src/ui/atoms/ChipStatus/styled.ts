import styled, { css } from "styled-components";
import { TChipStatus } from ".";

export const Container = styled.div<{ $chipStatus: TChipStatus }>`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 1.2rem;
  font-size: 1.2rem;
  color: #ffffff;
   width: fit-content;

  ${({ $chipStatus }) => {
    switch ($chipStatus) {
      case 'low':
        return css`
          color: #2e2e2e;
          background-color: #e9c46a;
        `;

      case 'medium':
        return css`
          background-color: #f4a261;
        `;

      case 'high':
        return css`
          background-color: #e76f51;
        `;

      default:
        return css`
          color: #7a7a7a;
          background-color: #f5f5f5;
        `;
    }
  }}
`;