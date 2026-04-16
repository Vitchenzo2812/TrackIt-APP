import Card from "@/ui/atoms/Card";
import * as S from './styled';
import Typography from "@/ui/atoms/Typography";
import ChipStatus from "@/ui/atoms/ChipStatus";
import { ProgressBar } from "../ProgressBar";
import { ChevronRight } from "lucide-react";

const FinanceCard = () => {
  return (
    <Card
      hover
      styles={{
        minHeight: '25.1rem',
        padding: '2.4rem',
        cursor: 'pointer'
      }}
    >
      <S.Container>
        <S.WrapperHeaderCard>
          <S.WrapperHeaderTexts>
            <Typography
              as='h3'
              color='#2E2E2E'
              size='1.8rem'
              weight={500}
            >
              Abril 2026
            </Typography>

            <Typography
              color='#7A7A7A'
              size='1.4rem'
            >
              5 transações
            </Typography>
          </S.WrapperHeaderTexts>

          <ChipStatus
            status='orange'
            label='Atual'
          />
        </S.WrapperHeaderCard>

        <S.WrapperInfo>
          <S.InfoRow>
            <Typography
              as='span'
              color='#7A7A7A'
              size='1.4rem'
            >
              Despesas
            </Typography>
            <Typography
              as='span'
              size='2rem'
              color='#E76F51'
            >
              R$ 770
            </Typography>
          </S.InfoRow>

          <S.InfoRow>
            <Typography
              as='span'
              size='1.4rem'
              color='#7A7A7A'
            >
              Limite
            </Typography>
            <Typography
              as='span'
              size='1.4rem'
              color='#7A7A7A'
            >
              R$ 2.000
            </Typography>
          </S.InfoRow>

          <ProgressBar 
            showLabel
            value={39}
            max={100}
            color='rgb(54, 186, 152)'
          />
        </S.WrapperInfo>

        <S.ContainerDetailsButton>
          <Typography
            as='span'
            size='1.4rem'
            color='#7A7A7A'
          >
            Ver detalhes
          </Typography>

          <ChevronRight width={16} height={16} color='#7A7A7A' />
        </S.ContainerDetailsButton>
      </S.Container>
    </Card>
  );
}

export default FinanceCard;