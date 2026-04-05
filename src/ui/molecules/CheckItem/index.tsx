import { Circle, CircleCheck } from 'lucide-react';
import * as S from './styled';
import { useEffect, useState } from 'react';
import Typography from '@/ui/atoms/Typography';

interface Props {
  isChecked?: boolean;
  canCheck?: boolean;
  onChange?: (value: boolean) => void;
  label: string;
}

const CheckItem = ({ isChecked = false, canCheck = false, onChange, label }: Props) => {
  const [check, setCheck] = useState<boolean>(isChecked);

  useEffect(() => {
    if (!onChange) return;
    onChange(isChecked);
  }, [isChecked, onChange])

  return (
    <S.Container
      canCheck={canCheck}
      onClick={() => {
        if (!canCheck) return;
        setCheck(old => !old) 
      }}
    >
      {!check ? <Circle width={16} height={16} color='#7A7A7A' /> : <CircleCheck width={16} height={16} color='#36BA98' />}
      
      <Typography
        as='span'
        size='1.4rem'
        color={check ? '#7A7A7A' : '#2E2E2E'}
        styles={check ? { textDecoration: 'line-through' } : {}}
      >
        {label}
      </Typography>
    </S.Container>
  );
}

export default CheckItem;