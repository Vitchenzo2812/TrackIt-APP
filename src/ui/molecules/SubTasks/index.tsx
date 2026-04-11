import Button from '@/ui/atoms/Button';
import * as S from './styled';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import CheckItem from '../CheckItem';

const SubTasks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <Button 
        variant='ghost-without-select'
        label='0/3 subtarefas'
        leftIcon={!isOpen 
          ? <ChevronRight width={16} height={16} color='#7A7A7A' /> 
          : <ChevronDown width={16} height={16} color='#7A7A7A' />
        }
        styles={{ 
          width: '13rem', 
          height: '2rem',
          fontSize: '1.4rem',
          padding: '0rem'
        }}
        onClick={() => { setIsOpen(old => !old) }}
      />

      <S.WrapperSubTasks $isOpen={isOpen}>
        <CheckItem 
          canCheck
          label='Ler introdução'
          onDelete={() => {}}
        />
        <CheckItem 
          canCheck
          status='high'
          label='Revisar seção de orçamento'
          onDelete={() => {}}
        />
        <CheckItem 
          canCheck
          label='Verificar cronograma'
          onDelete={() => {}}
        />
      </S.WrapperSubTasks>
    </S.Container>
  );
}

export default SubTasks;