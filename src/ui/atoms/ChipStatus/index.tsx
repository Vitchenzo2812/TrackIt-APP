import * as S from './styled';

export type TChipStatus = 'low' | 'medium' | 'high' | 'custom';

interface Props {
  status: TChipStatus;
  label?: string;
}

const labelStatus: Record<TChipStatus, string> = {
  low: 'Baixa',
  medium: 'Média',
  high: 'Alta',
  custom: ''
}

const ChipStatus = ({ status, label }: Props) => {
  return (
    <S.Container $chipStatus={status}>
      {label ?? labelStatus[status]}
    </S.Container>
  );
}

export default ChipStatus;