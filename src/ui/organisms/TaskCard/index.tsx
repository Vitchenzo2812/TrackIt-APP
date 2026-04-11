import CheckItem from '@/ui/molecules/CheckItem';
import ChipStatus from '@/ui/atoms/ChipStatus';
import Card from '@/ui/atoms/Card';
import * as S from './styled';
import SubTasks from '@/ui/molecules/SubTasks';

const TaskCard = () => {
  return (
    <Card styles={{ minHeight: '9.6rem', padding: '1.6rem' }}>
      <S.Container>
        <S.HeaderCard>
          <CheckItem 
            canCheck
            size='lg'
            label='Revisar proposta de projeto'
            description='Ler a proposta de projeto do Q1 e dar feedback'
          />

          <S.WrapperChipAndDelete>
            <ChipStatus status='high' />
            <S.DeleteIcon />
          </S.WrapperChipAndDelete>
        </S.HeaderCard>
        
        <S.ContentCard>
          <ChipStatus
            status='custom'
            label='Trabalho'
          />

          <SubTasks />
        </S.ContentCard>
      </S.Container>
    </Card>
  );
}

export default TaskCard;