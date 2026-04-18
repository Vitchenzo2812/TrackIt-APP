import styled, { css } from "styled-components";

export type TColorsIcon = 'green' | 'red' | 'orange'

export const IconCard = styled.div<{ color: TColorsIcon }>`
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