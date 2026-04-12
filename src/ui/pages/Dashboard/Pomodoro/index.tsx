import DashboardLayout from "@/ui/templates/DashboardLayout";
import TimerDisplay from "@/ui/atoms/TimerDisplay";
import Typography from "@/ui/atoms/Typography";
import Card from "@/ui/atoms/Card";
import * as S from './styled';
import Button from "@/ui/atoms/Button";
import { Play, RotateCcw, Settings } from "lucide-react";
import InfoBlock from "@/ui/atoms/InfoBlock";

const PomodoroPage = () => {
  return (
    <DashboardLayout>
      <S.WrapperAllItems>
        <S.WrapperTexts>
          <Typography
            as='h1'
            size='3rem'
            weight={500}
            color='#2E2E2E'
          >
            Timer Pomodoro
          </Typography>

          <Typography
            color='#7A7A7A'
            size='1.6rem'
          >
            Foque em suas tarefas
          </Typography>
        </S.WrapperTexts>

        <Card
          styles={{ padding: '2.4rem' }}
          responsiveStyles={{
            width: { mobile: '40rem', tablet: '48rem', desktop: '67.2rem' }
          }}
        >
          <S.ContainerItemsCard>
            <S.TitleTimer>
              <Typography
                color='#E76F51'
                size='1.6rem'
              >
                Hora de Focar
              </Typography>
            </S.TitleTimer>

            <TimerDisplay
              isBreak={false}
              minutes={20}
              seconds={0}
              progress={0}
            />

            <S.WrapperButtons>
              <Button 
                label="Iniciar"
                variant="primary"
                onClick={() => {}}
                leftIcon={<Play width={20} height={20} color="#ffffff" />}
                styles={{ width: '16rem', height: '5.6rem' }}
              />
              
              <Button 
                label="Reiniciar"
                variant="outline-red"
                onClick={() => {}}
                leftIcon={<RotateCcw width={20} height={20} color="#E76F51" />}
                styles={{ width: '16rem', height: '5.6rem' }}
              />
              
              <Button 
                variant="ghost"
                onClick={() => {}}
                leftIcon={<Settings width={20} height={20} color="#7A7A7A" />}
                styles={{ width: '7.6rem', height: '4.8rem' }}
              />
            </S.WrapperButtons>

            <S.Divisor />

            <S.WrapperInfoBlocks>
              <InfoBlock 
                label="Sessões Hoje"
                value="4"
              />
              
              <InfoBlock 
                label="Tempo de Foco"
                value="1h 40m"
              />
            </S.WrapperInfoBlocks>
          </S.ContainerItemsCard>
        </Card>

        <S.ContainerHints>
          <Typography
            as='h3'
            color='#E76F51'
            size='1.8rem'
            weight={500}
          >
            Dicas do Pomodoro
          </Typography>

          <Typography
            color='#7A7A7A'
            size='1.4rem'
          >
            • Foque em uma única tarefa durante cada sessão
          </Typography>

          <Typography
            color='#7A7A7A'
            size='1.4rem'
          >
            • Leve suas pausas a sério - afaste-se da sua mesa
          </Typography>

          <Typography
            color='#7A7A7A'
            size='1.4rem'
          >
            • Após 4 sessões, faça uma pausa mais longa (15-30 minutos)
          </Typography>

          <Typography
            color='#7A7A7A'
            size='1.4rem'
          >
            • Elimine distrações antes de iniciar uma sessão
          </Typography>
        </S.ContainerHints>
      </S.WrapperAllItems>
    </DashboardLayout>
  );
}

export default PomodoroPage;