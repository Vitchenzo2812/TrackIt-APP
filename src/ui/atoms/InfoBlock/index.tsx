import Typography from '../Typography';
import * as S from './styled';

interface Props {
  label: string;
  value: string;
}

const InfoBlock = ({ label, value }: Props) => {
  return (
    <S.Container>
      <Typography
        size='1.4rem'
        color='#7A7A7A'
      >
        {label}
      </Typography>

      <Typography
        size='2.4rem'
        color='#2E2E2E'
      >
        {value}
      </Typography>
    </S.Container>
  );
}

export default InfoBlock;