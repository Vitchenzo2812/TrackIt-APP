import Typography from '@/ui/atoms/Typography';
import { ProgressBar } from '../ProgressBar';
import { FolderKanban } from 'lucide-react';
import Card from '@/ui/atoms/Card';
import * as S from './styled';

const GroupCard = () => {
  return (
    <Card hover className={['group']}>
      <S.HeaderCard>
        <S.BackgroundGroupIcon>
          <FolderKanban width={24} height={24} color='rgb(231, 111, 81)' />
        </S.BackgroundGroupIcon>

        <S.WrapperIcons>
          <S.EditIcon />
          <S.DeleteIcon />
        </S.WrapperIcons>
      </S.HeaderCard>

      <S.ContentCard>
        <S.WrapperContentTexts>
          <Typography
            as='h3'
            color='#2E2E2E'
            size='1.8rem'
            weight={500}
          >
            Trabalho
          </Typography>
          <Typography
            size='1.4rem'
            color='#7A7A7A'
          >
            Tarefas e projetos profissionais
          </Typography>
        </S.WrapperContentTexts>

        <ProgressBar
          title='Progresso'
          value={3}
          max={8}
        />

        <S.Divisor />

        <S.WrapperTotalTasks>
          <Typography
            as='span'
            color='#7A7A7A'
            size='1.4rem'
          >
            Total de Tarefas
          </Typography>
          <Typography
            as='span'
            color='#2E2E2E'
            size='1.4rem'
          >
            8
          </Typography>
        </S.WrapperTotalTasks>
      </S.ContentCard>
    </Card>
  )
}

export default GroupCard;