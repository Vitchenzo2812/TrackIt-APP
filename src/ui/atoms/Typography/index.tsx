import { TypographyProps } from './types';
import * as S from './styled';

const Typography = ({
  as = 'p',
  size = '1.6rem',
  weight = 400,
  color = '#000',
  styles,
  children,
}: TypographyProps) => {
  return (
    <S.Text style={styles} as={as} size={size} weight={weight} color={color}>
      {children}
    </S.Text>
  );
};

export default Typography;