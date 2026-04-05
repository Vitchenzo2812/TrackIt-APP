import { CSSProperties, PropsWithChildren } from 'react';
import * as S from './styled';

interface Props {
  styles?: CSSProperties;
  hover?: boolean;
}

const Card = ({ children, styles, hover = false }: PropsWithChildren<Props>) => {
  return (
    <S.HoverCard hover={hover}>
      <S.Container style={styles}>
        {children}
      </S.Container>
    </S.HoverCard>
  );
}

export default Card;