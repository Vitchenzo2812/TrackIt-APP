import { CSSProperties, PropsWithChildren } from 'react';
import * as S from './styled';

interface Props {
  styles?: CSSProperties;
}

const Card = ({ children, styles }: PropsWithChildren<Props>) => {
  return (
    <S.Container style={styles}>
      {children}
    </S.Container>
  );
}

export default Card;