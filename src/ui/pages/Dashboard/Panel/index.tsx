import Header from '@/ui/molecules/Header';
import Button from '@/ui/atoms/Button';
import { CircleCheck, DollarSign, Plus, TrendingUp } from 'lucide-react';
import { ProgressBar } from '@/ui/molecules/ProgressBar';
import Typography from '@/ui/atoms/Typography';
import Card from '@/ui/atoms/Card';
import * as S from './styled';
import CheckItem from '@/ui/molecules/CheckItem';
import useIsMobile from '@/ui/hooks/use-is-mobile';
import NavItems from '@/ui/molecules/NavItems';

const DashboardPage = () => {
  const isMobile = useIsMobile('(max-width: 887px)');
  
  return (
    <S.Container>
      <S.WrapperPage>
        <Header isMobile={isMobile} />
        {isMobile && <NavItems />}

        <S.WrapperAllItems>
          <S.WrapperTitleButtons>
            <S.WrapperTitleSubtitle>
              <Typography
                as='h1'
                size='3rem'
                color='#2E2E2E'
              >
                Painel
              </Typography>

              <Typography color='#7A7A7A'>
                Foque no que mais importa hoje! 🎯
              </Typography>
            </S.WrapperTitleSubtitle>

            <S.WrapperButtons>
              <Button
                label='Adicionar Tarefa'
                variant='secondary'
                onClick={() => {}}
                leftIcon={<Plus width={16} height={16} color='#FFFFFF' />}
                styles={{ 
                  height: '3.2rem', 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '2rem', 
                  gap: '0.6rem' 
                }}
              />

              <Button 
                label='Adicionar Despesa'
                variant='primary'
                onClick={() => {}}
                leftIcon={<Plus width={16} height={16} color='#FFFFFF' />}
                styles={{ 
                  height: '3.2rem', 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '2rem', 
                  gap: '0.6rem' 
                }}
              />
            </S.WrapperButtons>
          </S.WrapperTitleButtons>

          <S.WrapperCards>
            <Card 
              hover
              className={['responsive-panel-card']}
              styles={{
                minHeight: '16.2rem',
                padding: '2.4rem'
              }}
            >
              <S.WrapperSectionCard>
                <S.WrapperCardTexts>
                  <Typography color='#7A7A7A'>
                    Tarefas Concluídas
                  </Typography>

                  <Typography
                    as='h2'
                    size='3rem'
                    weight={500}
                    color='#2E2E2E'
                  >
                    2/5
                  </Typography>
                </S.WrapperCardTexts>

                <S.IconCard color='green'>
                  <CircleCheck color='#36BA98' />
                </S.IconCard>
              </S.WrapperSectionCard>

              <ProgressBar value={40} showLabel />
            </Card>

            <Card
              hover
              className={['responsive-panel-card']}
              styles={{
                minHeight: '16.2rem',
                padding: '2.4rem'
              }}
            >
              <S.WrapperSectionCard>
                <S.WrapperCardTexts>
                  <Typography color='#7A7A7A'>
                    Este Mês
                  </Typography>

                  <Typography 
                    as='h2'
                    size='3rem'
                    weight={500}
                    color='#2E2E2E'
                  >
                    R$ 2.450
                  </Typography>
                </S.WrapperCardTexts>

                <S.IconCard color='red'>
                  <DollarSign color='#E76F51' />
                </S.IconCard>
              </S.WrapperSectionCard>

              <Typography
                size="1.4rem"
                color="#36BA98"
              >
                +12% do mês passado
              </Typography>
            </Card>

            <Card
              hover
              className={['responsive-panel-card']}
              styles={{
                minHeight: '16.2rem',
                padding: '2.4rem'
              }}
            >
              <S.WrapperSectionCard>
                <S.WrapperCardTexts>
                  <Typography
                    color='#7A7A7A'
                  >
                    Produtividade
                  </Typography>

                  <Typography
                    as='h2'
                    size='3rem'
                    weight={500}
                    color='#2E2E2E'
                  >
                    87%
                  </Typography>
                </S.WrapperCardTexts>

                <S.IconCard color='red'>
                  <TrendingUp color='#F4A261' />
                </S.IconCard>
              </S.WrapperSectionCard>

              <Typography
                size="1.4rem"
                color="#36BA98"
              >
                Ótima semana!
              </Typography>
            </Card>
          </S.WrapperCards>

          <S.WrapperTitleTasks>
            <Typography
              size='2rem'
              color='#2E2E2E'
              weight={500}
            >
              Tarefas de Hoje
            </Typography>
          </S.WrapperTitleTasks>

          <S.WrapperCards>
            <Card
              hover
              className={['responsive-panel-tasks-card']}
              styles={{
                minHeight: '16.2rem',
                padding: '2.4rem'
              }}
            >
              <S.WrapperSectionCard>
                <Typography
                  as='h3'
                  size='1.8rem'
                  weight={500}
                  color='#2E2E2E'
                >
                  Trabalho
                </Typography>

                <Typography
                  as='span'
                  size='1.4rem'
                  color='#7A7A7A'
                >
                  0/2
                </Typography>
              </S.WrapperSectionCard>

              <ProgressBar value={0} max={2} className='padding-bottom' />
              
              <S.WrapperCheckItems>
                <CheckItem label='Revisar proposta de projeto'/>
                <CheckItem label='Preparar slides da apresentação'/>
              </S.WrapperCheckItems>
            </Card>

            <Card
              hover
              className={['responsive-panel-tasks-card']}
              styles={{
                minHeight: '16.2rem',
                padding: '2.4rem'
              }}
            >
              <S.WrapperSectionCard>
                <Typography
                  as='h3'
                  size='1.8rem'
                  weight={500}
                  color='#2E2E2E'
                >
                  Pessoal
                </Typography>

                <Typography
                  as='span'
                  size='1.4rem'
                  color='#7A7A7A'
                >
                  1/2
                </Typography>
              </S.WrapperSectionCard>

              <ProgressBar value={1} max={2} className='padding-bottom' />

              <S.WrapperCheckItems>
                <CheckItem isChecked label='Ligar para o dentista'/>
                <CheckItem label='Ler 30 páginas'/>
              </S.WrapperCheckItems>
            </Card>

            <Card
              hover
              className={['responsive-panel-tasks-card']}
              styles={{
                minHeight: '16.2rem',
                padding: '2.4rem'
              }}
            >
              <S.WrapperSectionCard>
                <Typography
                  as='h3'
                  size='1.8rem'
                  weight={500}
                  color='#2E2E2E'
                >
                  Saúde
                </Typography>

                <Typography
                  as='span'
                  size='1.4rem'
                  color='#7A7A7A'
                >
                  1/1
                </Typography>
              </S.WrapperSectionCard>

              <ProgressBar value={1} max={1} className='padding-bottom' />

              <S.WrapperCheckItems>
                <CheckItem isChecked label='Sessão de treino'/>
              </S.WrapperCheckItems>
            </Card>
          </S.WrapperCards>
        </S.WrapperAllItems>
      </S.WrapperPage>
    </S.Container>
  );
}

export default DashboardPage;