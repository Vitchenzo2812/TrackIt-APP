import { FolderKanban, LayoutDashboard, SquareCheckBig, Timer, Wallet } from 'lucide-react';
import { ReactElement, useState } from 'react';
import Button from '@/ui/atoms/Button';
import * as S from './styled';
import Typography from '@/ui/atoms/Typography';

export type TSectionOption = 'panel' | 'tasks' | 'groups' | 'finance' | 'pomodoro'

export type TSection = {
  option: TSectionOption,
  label: string,
  icon: ReactElement
}

const Sections: TSection[] = [
  { option: 'panel', label: 'Painel', icon: <LayoutDashboard width={20} height={20} /> },
  { option: 'tasks', label: 'Tarefas', icon: <SquareCheckBig width={20} height={20} /> },
  { option: 'groups', label: 'Grupos', icon: <FolderKanban width={20} height={20} /> },
  { option: 'finance', label: 'Finanças', icon: <Wallet width={20} height={20} /> },
  { option: 'pomodoro', label: 'Pomodoro', icon: <Timer width={20} height={20} /> },
]

const Header = () => {
  const [option, setOption] = useState<TSectionOption>('panel');

  return (
    <S.Container>
      <Typography 
        as='span'
        size='2.4rem' 
        color='#2E2E2E' 
        weight={500}
      >
        ITrackIt
      </Typography>

      <S.WrapperButtons>
        {Sections.map(section => (
          <Button
            variant='ghost'
            key={section.option}
            label={section.label}
            leftIcon={section.icon}
            isSelected={section.option === option}
            onClick={() => { setOption(section.option) }}
            styles={{ height: '4rem', padding: '0.8rem 1.6rem' }}
          />
        ))}
      </S.WrapperButtons>

      <S.WrapperIcons>
        <S.UserIcon />
        <S.LogOutIcon />
      </S.WrapperIcons>
    </S.Container>
  );
}

export default Header;