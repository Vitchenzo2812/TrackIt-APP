import Button from '@/ui/atoms/Button';
import * as S from './styled';
import Card from '@/ui/atoms/Card';
import { CheckCircle2, Clock, Target, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/router';
import Typography from '@/ui/atoms/Typography';

const features = [
  { 
    icon: CheckCircle2, 
    title: "Gestão de Tarefas", 
    description: "Organize seu trabalho com\n eficiência" 
  },
  { 
    icon: Target, 
    title: "Rastreio de Hábitos",
    description: "Construa rotinas melhores" 
  },
  { 
    icon: TrendingUp, 
    title: "Controle Financeiro", 
    description: "Acompanhe receitas e\n despesas" 
  },
  { 
    icon: Clock,
    title: "Timer Pomodoro", 
    description: "Foque no que importa" 
  },
];

const WelcomePage = () => {
  const router = useRouter();

  const natigateToAuth = () => router.push('/sign-in');

  return (
    <S.Container>
      <S.Header>
        <Typography 
          as='span' 
          size='2.4rem' 
          color='#2E2E2E' 
          weight={500}
        >
          ITrackIt
        </Typography>

        <Button 
          label='Entrar' 
          variant='outline-red'
          onClick={natigateToAuth} 
        />
      </S.Header>

      <S.WrapperComponents>
        <Typography
          as='h1' 
          size={{ mobile: '5rem', desktop: '6rem' }}
          color='#2E2E2E' 
          weight={500}
          styles={{ textAlign: 'center' }}
        >
          Sua Vida, <Typography as='span' size={{ mobile: '5rem', desktop: '6rem' }} weight={500} color='#E76F51'>Organizada</Typography>
        </Typography>

        <Typography
          as='p'
          color='#7A7A7A'
          size={{ mobile: '1.8rem', desktop: '2rem' }}
          styles={{ textAlign: 'center', lineHeight: 1.4 }}
        >
          Um hub unificado de produtividade para gerenciar tarefas,<br/>
          construir hábitos e controlar suas finanças — tudo em um só lugar.
        </Typography>

        <S.WrapperButtons>
          <Button 
            label='Começar Agora'
            variant='primary'
            onClick={natigateToAuth}
            styles={{ 
              fontSize: '1.8rem',
              fontWeight: 500
            }}
          />

          <Button 
            label='Saiba Mais'
            variant='outline-red'
            onClick={() => {}}
            styles={{ 
              fontSize: '1.8rem',
              fontWeight: 500
            }}
          />
        </S.WrapperButtons>

        <S.WrapperCards>
          {features.map(feature => {
            const Icon = feature.icon;
            return (
              <Card
                hover
                key={feature.title}
                responsiveStyles={{
                  width: '29rem',
                  height: '22.1rem',
                  padding: '3.2rem'
                }}
              >
                <S.ContainerItemsInCard>
                  <S.BackgroundIcon>
                    <Icon width={26} height={26} color='#E76F51' />
                  </S.BackgroundIcon>
                  
                  <Typography
                    as='h3'
                    size='1.8rem'
                    weight={500}
                    color='#2E2E2E'
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    as='p'
                    color='#7A7A7A'
                    styles={{ whiteSpace: 'break-spaces', textAlign: 'center' }}
                  >
                    {feature.description}
                  </Typography>
                </S.ContainerItemsInCard>
              </Card>
            )
          })}
        </S.WrapperCards>
      </S.WrapperComponents>
    </S.Container>
  );
}

export default WelcomePage;