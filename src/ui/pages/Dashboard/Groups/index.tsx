import DashboardLayout from '@/ui/templates/DashboardLayout';
import useIsMobile from '@/ui/hooks/use-is-mobile';
import GroupCard from '@/ui/molecules/GroupCard';
import Typography from '@/ui/atoms/Typography';
import Button from '@/ui/atoms/Button';
import { Plus } from 'lucide-react';
import * as S from './styled';

const GroupsPage = () => {
  const isMobile = useIsMobile('(max-width: 395px)');
  const items = Array.from({ length: 4 })

  return (
    <DashboardLayout>
      <S.WrapperAllItems>
        <S.WrapperHeaderGroups>
          <S.WrapperHeaderTexts>
            <Typography
              as='h1'
              color='#2E2E2E'
              size='3rem'
              weight={500}
            >
              Grupos de Tarefas
            </Typography>

            <Typography
              color='#7A7A7A'
              size='1.6rem'
            >
              Organize suas tarefas por categoria
            </Typography>
          </S.WrapperHeaderTexts>

          <Button 
            label='Criar Grupo'
            variant='primary'
            leftIcon={<Plus width={16} height={16} color='#FFFFFF' />}
            onClick={() => {}}
            styles={{
              width: '17rem',
              height: '4.4rem',
              padding: isMobile ? '1rem' : '1rem 2rem',
              gap: '0.4rem'
            }}
          />
        </S.WrapperHeaderGroups>
        
        <S.WrapperGroups>
          {items.map((_, index) => <GroupCard color='#E76F51' key={index} />)}
        </S.WrapperGroups>
      </S.WrapperAllItems>
    </DashboardLayout>
  );
}

export default GroupsPage;