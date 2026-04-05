import { Responsive } from '@/utils/responsive.utils';
import { CSSProperties, ElementType, ReactNode } from 'react';

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