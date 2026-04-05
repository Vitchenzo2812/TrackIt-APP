import * as S from './styled';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  color?: string;
}

export const ProgressBar = ({
  value,
  max = 100,
  className = "",
  showLabel = false,
  color
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <S.Wrapper className={className}>
      <S.BarContainer>
        <S.Bar
          $color={color}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </S.BarContainer>

      {showLabel && <S.Label>{Math.round(percentage)}%</S.Label>}
    </S.Wrapper>
  );
};