import styled, { css } from "styled-components";
import { ResponsiveStyles } from "./types";
import { resolveResponsive } from "@/utils/responsive.utils";

type ContainerProps = {
  responsiveStyles?: ResponsiveStyles;
  hover: boolean
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  background-color: #FFFFFF;
  border: rgba(0, 0, 0, 0.05) 0.1rem solid;
  border-radius: 1rem;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        transform: translateY(-1rem);
      }
    `}

  ${({ responsiveStyles }) =>
    !!responsiveStyles &&
    css`
      ${!!responsiveStyles?.width && css`${resolveResponsive('width', responsiveStyles.width)}`}
      ${!!responsiveStyles?.height && css`${resolveResponsive('height', responsiveStyles.height)}`}
      ${!!responsiveStyles?.padding && css`${resolveResponsive('padding', responsiveStyles.padding)}`}
      ${!!responsiveStyles?.margin && css`${resolveResponsive('margin', responsiveStyles.margin)}`}
      ${!!responsiveStyles?.gap && css`${resolveResponsive('gap', responsiveStyles.gap)}`}
      ${!!responsiveStyles?.borderRadius &&
      css`${resolveResponsive('border-radius', responsiveStyles.borderRadius)}`}
    `}
`;