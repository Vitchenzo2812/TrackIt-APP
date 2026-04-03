import Button from '@/ui/atoms/Button';
import * as S from './styled';
import Card from '@/ui/atoms/Card';
import { CheckCircle2, Clock, Target, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/router';

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
        <S.BrandName>ITrackIt</S.BrandName>

        <Button 
          label='Entrar' 
          variant='outline'
          onClick={natigateToAuth} 
        />
      </S.Header>

      <S.WrapperComponents>
        <S.Title>Sua Vida, <S.OrangeTitle>Organizada</S.OrangeTitle></S.Title>

        <S.Subtitle>
          Um hub unificado de produtividade para gerenciar tarefas,<br/>
          construir hábitos e controlar suas finanças — tudo em um só lugar.
        </S.Subtitle>

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
            variant='outline'
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
              <S.HoverCard key={feature.title}>
                <Card
                  styles={{
                    width: '29rem',
                    height: '22.1rem'
                  }}
                >
                  <S.ContainerItemsInCard>
                    <S.BackgroundIcon>
                      <Icon width={26} height={26} color='#E76F51' />
                    </S.BackgroundIcon>
                    
                    <S.CardTitle>
                      {feature.title}
                    </S.CardTitle>

                    <S.CardDescription>
                      {feature.description}
                    </S.CardDescription>
                  </S.ContainerItemsInCard>
                </Card>
              </S.HoverCard>
            )
          })}
        </S.WrapperCards>
      </S.WrapperComponents>
    </S.Container>
  );
}

export default WelcomePage;