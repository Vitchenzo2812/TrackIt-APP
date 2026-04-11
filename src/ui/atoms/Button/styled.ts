import styled, { css } from "styled-components";
import { TButtonVariant } from ".";

export const Container = styled.button<{
  variant: TButtonVariant,
  selected?: boolean,
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.4rem 2.8rem;
  cursor: pointer;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  height: 6rem;

  ${({ variant, selected }) => {
    switch (variant) {
      case "ghost":
        return css`
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background-color: transparent;
          cursor: pointer;
          color: #7A7A7A;
          font-size: 1.6rem;
          font-weight: 500;
          transition: all 0.2s ease-in-out;

          ${!selected && css`
            &:hover {
              color: #E76F51;
  
              .lucide-move-left {
                stroke: #E76F51;
              }
            }
          `}

          ${selected && css`
            background-color: #E76F51;
            color: white;
          `}
        `;

      case "ghost-without-select":
        return css`
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background-color: transparent;
          cursor: pointer;
          color: #7A7A7A;
          font-size: 1.6rem;
          font-weight: 500;
          transition: all 0.2s ease-in-out;

          ${!selected && css`
            &:hover {
              color: #E76F51;
  
              .lucide-move-left, 
              .lucide-chevron-right, 
              .lucide-chevron-down {
                stroke: #E76F51;
              }
            }
          `}

          ${selected && css`
            color: #E76F51;
          `}
        `;

      case "gray-red":
        return css`
          background-color: #EEEEEE;
          color: #7A7A7A;
          transition: 
            background-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;

          &:hover {
            transform: scale(1.03);
          }

          ${selected && css`
            background-color: #E76F51;
            color: white;
          `}
        `;

      case "gray-orange":
        return css`
          background-color: #EEEEEE;
          color: #7A7A7A;
          transition: 
            background-color 0.3s ease,
            color 0.3s ease,
            transform 0.2s ease;

          &:hover {
            transform: scale(1.03);
          }

          ${selected && css`
            background-color: #F4A261;
            color: white;

            .chip {
              background-color: #fcbe8b;
              color: #ffffff;
            }
          `}
        `;

      case "outline-red":
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

      case "outline-orange":
        return css`
          background-color: transparent;
          color: #F4A261;
          border: #F4A261 0.2rem solid;
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
            transform: scale(1.03);
          }
        `;
    }
  }}
`;

export const Chip = styled.div`
  background-color: #E0E0E0;
  color: #7A7A7A;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.6rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
`;