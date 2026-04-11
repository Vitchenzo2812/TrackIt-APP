import ChipStatus, { TChipStatus } from '@/ui/atoms/ChipStatus';
import { Circle, CircleCheck } from 'lucide-react';
import Typography from '@/ui/atoms/Typography';
import { useEffect, useState } from 'react';
import * as S from './styled';

type TCheckItemSize = 'md' | 'lg'

interface Props {
  label: string;
  isChecked?: boolean;
  canCheck?: boolean;
  onChange?: (value: boolean) => void;
  onDelete?: () => void;
  description?: string;
  size?: TCheckItemSize;
  status?: TChipStatus;
}

const sizeInPx: Record<TCheckItemSize, number> = {
  md: 16,
  lg: 20
}

const CheckItem = ({ 
  isChecked = false, 
  canCheck = false, 
  onChange, 
  size = 'md', 
  label, 
  description,
  status,
  onDelete
}: Props) => {
  const [check, setCheck] = useState<boolean>(isChecked);

  useEffect(() => {
    if (!onChange) return;
    onChange(isChecked);
  }, [isChecked, onChange])

  return (
    <S.Container
      $canCheck={canCheck}
      $hasDescrption={!!description}
      onClick={() => {
        if (!canCheck) return;
        setCheck(old => !old) 
      }}
    >
      {!check 
        ? <Circle width={sizeInPx[size]} height={sizeInPx[size]} color='#7A7A7A' /> 
        : <CircleCheck width={sizeInPx[size]} height={sizeInPx[size]} color='#36BA98' />
      }
      
      <S.WrapperTexts>
        <S.WrapperTitleStatus>
          <Typography
            as='span'
            size={size === 'md' ? '1.4rem' : '1.8rem'}
            color={check && size === 'md' ? '#7A7A7A' : '#2E2E2E'}
            styles={check ? { textDecoration: 'line-through' } : {}}
          >
            {label}
          </Typography>

          {!!status && !check && <ChipStatus status={status} />}
          {!!onDelete && !check && (
            <S.DeleteIcon onClick={(e) => {
              e.stopPropagation();
              onDelete()
            }} />
          )}
        </S.WrapperTitleStatus>

        {!!description && (
          <Typography
            color='#747474'
            size='1.4rem'
          >
            {description}
          </Typography>
        )}
      </S.WrapperTexts>
    </S.Container>
  );
}

export default CheckItem;