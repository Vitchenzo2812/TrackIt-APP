import styled, { css } from 'styled-components';
import { TextProps } from './types';
import { resolveResponsive } from './utils';

export const Text = styled.p<TextProps>`
  margin: 0;

  ${({ size = '16px' }) => css`${resolveResponsive('font-size', size)}`}
  ${({ weight = 400 }) => css`${resolveResponsive('font-weight', weight)}`}
  ${({ color = '#000' }) => css`${resolveResponsive('color', color)}`}
`;