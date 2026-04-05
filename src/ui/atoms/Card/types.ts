import { Responsive } from "@/utils/responsive.utils";

type CSSValue = string | number;

export type ResponsiveStyles = {
  width?: Responsive<CSSValue>;
  height?: Responsive<CSSValue>;
  padding?: Responsive<CSSValue>;
  margin?: Responsive<CSSValue>;
  gap?: Responsive<CSSValue>;
  borderRadius?: Responsive<CSSValue>;
};