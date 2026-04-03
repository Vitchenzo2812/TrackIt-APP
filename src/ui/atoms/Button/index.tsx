 
import { CSSProperties, ReactElement } from 'react';
import { CircularProgress } from '@mui/material';
import * as S from './styled';

export type TButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface Props {
  label: string;
  variant: TButtonVariant;
  onClick: () => void;
  styles?: CSSProperties;
  isLoading?: boolean;
  leftIcon?: ReactElement;
}

const Button = ({ 
  label, 
  variant, 
  onClick,
  leftIcon,
  styles,
  isLoading = false
}: Props) => {
  return (
    <S.Container
      aria-label={label}
      variant={variant}
      onClick={onClick}
      style={styles}
      disabled={isLoading}
    >
      {leftIcon}
      {isLoading ? <CircularProgress size={25} color='secondary' /> : label}
    </S.Container>
  );
}

export default Button;