import { PropsWithChildren } from 'react';
import * as S from './styled';

interface Props {
  color: S.TColorsIcon
}

const Icon = ({ color, children }: PropsWithChildren<Props>) => (
  <S.IconCard color={color}>
    {children}
  </S.IconCard>
);

export default Icon;