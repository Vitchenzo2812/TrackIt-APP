import { breakpoints, Responsive } from './types';

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
    @media (min-width: ${breakpoint}px) {
      ${styles}
    }
  `;
};

export const resolveResponsive = <T extends CSSValue>(
  property: string,
  value: Responsive<T>
): string => {
  if (typeof value !== 'object') {
    return `${property}: ${formatValue(property, value)};`;
  }

  let styles = '';

  if (!!value?.mobile) {
    styles += createMediaQuery(
      breakpoints.mobile,
      `${property}: ${formatValue(property, value.mobile)};`
    );
  }

  if (!!value?.tablet) {
    styles += createMediaQuery(
      breakpoints.tablet,
      `${property}: ${formatValue(property, value.tablet)};`
    );
  }

  if (!!value?.desktop) {
    styles += createMediaQuery(
      breakpoints.desktop,
      `${property}: ${formatValue(property, value.desktop)};`
    );
  }

  return styles;
};