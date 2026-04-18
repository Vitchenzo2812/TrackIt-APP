import Icon from '@/ui/atoms/Icon';
import * as S from './styled';
import { CircleArrowUp } from 'lucide-react';
import Typography from '@/ui/atoms/Typography';

const RecentlyTransactionCard = () => {
  return (
    <S.Container>
      <S.WrapperSection>
        <Icon color='green'>
          <CircleArrowUp color='#36BA98' />
        </Icon>

        <S.WrapperTexts>
          <Typography
            color='#2E2E2E'
            size='1.6rem'
          >
            Salário
          </Typography>
          <Typography
            color='#7A7A7A'
            size='1.4rem'
          >
            Salário • 15-03-2026
          </Typography>
        </S.WrapperTexts>
      </S.WrapperSection>

      <S.WrapperLastSection>
        <Typography
          size='1.8rem'
          color='#36BA98'
        >
          +R$5.000
        </Typography>
        <S.DeleteIcon />
      </S.WrapperLastSection>
    </S.Container>
  );
}

export default RecentlyTransactionCard;