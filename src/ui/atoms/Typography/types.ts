import { CSSProperties, ElementType, ReactNode } from 'react';

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export type BreakpointKeys = keyof typeof breakpoints;

export type Responsive<T> =
  | T
  | {
    mobile?: T;
    tablet?: T;
    desktop?: T;
  };

export type TypographyProps = {
  as?: ElementType;
  size?: Responsive<string>;
  weight?: Responsive<number | string>;
  color?: Responsive<string>;
  styles?: CSSProperties;
  children: ReactNode;
};

export type TextProps = {
  size?: Responsive<string>;
  weight?: Responsive<number | string>;
  color?: Responsive<string>;
};