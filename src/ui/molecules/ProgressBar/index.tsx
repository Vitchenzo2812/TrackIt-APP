import Typography from '@/ui/atoms/Typography';
import * as S from './styled';

interface ProgressBarProps {
  value: number;
  title?: string;
  max?: number;
  className?: string;
  showLabel?: boolean;
  color?: string;
}

export const ProgressBar = ({
  value,
  title = "",
  max = 100,
  className = "",
  showLabel = false,
  color
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <S.Wrapper className={className}>
      {!!title && (
        <S.WrapperTitle>
          <Typography
            as='span'
            size='1.4rem'
            color='#7A7A7A'
          >
            {title}
          </Typography>

          <Typography
            size='1.4rem'
            color='#2E2E2E'
          >
            {value}/{max} tarefas
          </Typography>
        </S.WrapperTitle>
      )}

      <S.BarContainer>
        <S.Bar
          $color={color}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </S.BarContainer>

      {showLabel && (
        <Typography
          size='1.4rem'
          color='#7A7A7A'
          styles={{ textAlign: 'right' }}
        >
          {Math.round(percentage)}%
        </Typography>
      )}
    </S.Wrapper>
  );
};