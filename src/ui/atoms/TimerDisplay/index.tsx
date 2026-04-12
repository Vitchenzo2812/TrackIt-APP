import * as S from './styled';

type Props = {
  minutes: number;
  seconds: number;
  progress: number;
  isBreak: boolean;
};

export function TimerDisplay({
  minutes,
  seconds,
  progress,
  isBreak,
}: Props) {
  const radius = 140;
  const circumference = 2 * Math.PI * radius;

  return (
    <S.Wrapper>
      <S.Svg>
        <S.BackgroundCircle cx="160" cy="160" r={radius} />

        <S.ProgressCircle
          cx="160"
          cy="160"
          r={radius}
          $isBreak={isBreak}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress / 100 }}
          transition={{ duration: 0.3 }}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference * (1 - progress / 100),
          }}
        />
      </S.Svg>

      <S.TimeContainer>
        <S.TimeText
          key={`${minutes}:${seconds}`}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </S.TimeText>
      </S.TimeContainer>
    </S.Wrapper>
  );
}

export default TimerDisplay;