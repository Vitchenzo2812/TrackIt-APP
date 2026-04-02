import styled, { css } from "styled-components";
import { TButtonVariant } from ".";

export const Container = styled.button<{
  variant: TButtonVariant
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.8rem;
  cursor: pointer;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  height: 6rem;

  ${props => {
    switch (props.variant) {
      case "ghost":
        return css`
          background: transparent;
          border: none;
          color: #7A7A7A;
          background-color: #F5F5F5;
          cursor: pointer;
          transition: color 0.3s ease;
          font-weight: 500;

          &:hover {
            transform: scale(1.03);
          }
        `;

      case "outline":
        return css`
          background-color: transparent;
          color: #E76F51;
          border: #E76F51 0.2rem solid;
          transition: 
            background-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;

          &:hover {
            transform: scale(1.03);
          }
        `;

      case "secondary":
        return css`
          background-color: #F4A261;
          color: white;
          transition: 
            background-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;

          &:hover {
            background-color: #e8945a;
            transform: scale(1.03);
          }
        `;

      default:
        return css`
          background-color: #E76F51;
          color: white;
          transition: 
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;

          &:hover {
            background-color: #d5634a;
            transform: scale(1.05);
          }
        `;
    }
  }}
`;