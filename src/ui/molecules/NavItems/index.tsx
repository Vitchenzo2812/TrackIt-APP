import { FolderKanban, LayoutDashboard, SquareCheckBig, Timer, Wallet } from 'lucide-react';
import { TSection, TSectionOption } from '../Header';
import * as S from './styled';
import Button from '@/ui/atoms/Button';
import { useState } from 'react';

const Sections: TSection[] = [
  { option: 'panel', label: 'Painel', icon: <LayoutDashboard width={20} height={20} /> },
  { option: 'tasks', label: 'Tarefas', icon: <SquareCheckBig width={20} height={20} /> },
  { option: 'groups', label: 'Grupos', icon: <FolderKanban width={20} height={20} /> },
  { option: 'finance', label: 'Finanças', icon: <Wallet width={20} height={20} /> },
  { option: 'pomodoro', label: 'Pomodoro', icon: <Timer width={20} height={20} /> },
]

const NavItems = () => {
  const [option, setOption] = useState<TSectionOption>('panel');

  return (
    <S.Container>
      {Sections.map(section => (
        <Button
          variant='ghost-without-select'
          key={section.option}
          label={section.label}
          leftIcon={section.icon}
          isSelected={section.option === option}
          onClick={() => { setOption(section.option) }}
          styles={{ 
            flexDirection: 'column',
            width: '5.8rem',
            height: '5.5rem',
            padding: '0.8rem 1.2rem',
            fontSize: '1.2rem'
          }}
        />
      ))}
    </S.Container>
  );
}

export default NavItems;