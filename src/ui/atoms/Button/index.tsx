 
import React, { CSSProperties, ReactElement } from 'react';
import { CircularProgress } from '@mui/material';
import * as S from './styled';

export type TButtonVariant = 'primary' 
  | 'secondary' 
  | 'ghost' 
  | 'ghost-without-select' 
  | 'outline-red'
  | 'outline-orange'
  | 'gray-red'
  | 'gray-orange';

interface Props {
  variant: TButtonVariant;
  onClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label?: string;
  numberInChip?: number;
  leftIcon?: ReactElement;
  styles?: CSSProperties;
  isSelected?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({ 
  label = '', 
  variant, 
  onClick,
  leftIcon,
  styles,
  numberInChip,
  isSelected = false,
  isLoading = false,
  disabled = false,
}: Props) => {
  return (
    <S.Container
      aria-label={label}
      variant={variant}
      onClick={onClick}
      style={styles}
      selected={isSelected}
      disabled={isLoading || disabled}
    >
      {leftIcon}
      {isLoading ? <CircularProgress size={25} color='secondary' /> : label}
      {numberInChip && (
        <S.Chip className='chip'>
          {numberInChip}
        </S.Chip>
      )}
    </S.Container>
  );
}

export default Button;