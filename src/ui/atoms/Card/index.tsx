import { PropsWithChildren } from 'react';
import * as S from './styled';
import { ResponsiveStyles } from './types';
import { CSSProperties } from 'styled-components';

interface Props {
  responsiveStyles?: ResponsiveStyles;
  styles?: CSSProperties
  hover?: boolean;
  className?: string[];
}

const Card = ({ children, responsiveStyles, styles, className = [], hover = false }: PropsWithChildren<Props>) => {
  return (
      <S.Container 
        className={className.join(' ')} 
        style={styles} 
        responsiveStyles={responsiveStyles}
        hover={hover}
      >
        {children}
      </S.Container>
  );
};

export default Card;