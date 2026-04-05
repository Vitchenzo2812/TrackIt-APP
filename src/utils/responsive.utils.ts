export type Responsive<T> =
  | T
  | {
    mobile?: T;
    tablet?: T;
    desktop?: T;
  };

export const breakpoints = {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
};

export type BreakpointKeys = keyof typeof breakpoints;

type CSSValue = string | number;

const unitlessProperties = new Set([
  'font-weight',
  'line-height',
  'z-index',
  'opacity',
  'flex',
  'flex-grow',
  'flex-shrink',
]);

const formatValue = (property: string, value: CSSValue) => {
  if (typeof value === 'number' && !unitlessProperties.has(property)) {
    return `${value}px`;
  }
  return String(value);
};

const createMediaQuery = (breakpoint: number, styles: string) => {
  return `
    @media (max-width: ${breakpoint}px) {
      ${styles}
    }
  `;
};

export const resolveResponsive = <T extends string | number>(
  property: string,
  value: Responsive<T>
): string => {
  if (typeof value !== 'object') {
    return `${property}: ${formatValue(property, value)};`;
  }

  let styles = '';

  if (!!value?.desktop) {
    styles += `${property}: ${formatValue(property, value.desktop)};`;
  }

  if (!!value?.tablet) {
    styles += createMediaQuery(
      breakpoints.tablet,
      `${property}: ${formatValue(property, value.tablet)};`
    );
  }

  if (!!value?.mobile) {
    styles += createMediaQuery(
      breakpoints.mobile,
      `${property}: ${formatValue(property, value.mobile)};`
    );
  }

  return styles;
};