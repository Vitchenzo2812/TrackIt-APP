import { Sections, TSectionOption } from '@/ui/routes/types';
import { useRouter } from 'next/router';
import Button from '@/ui/atoms/Button';
import { useState } from 'react';
import * as S from './styled';

const NavItems = () => {
  const router = useRouter();
  const [option, setOption] = useState<TSectionOption>(router.pathname.split('/')[2] as TSectionOption);

  return (
    <S.Container>
      {Sections.map(section => (
        <Button
          variant='ghost-without-select'
          key={section.option}
          label={section.label}
          leftIcon={section.icon}
          isSelected={section.option === option}
          disabled={section.disabled}
          onClick={() => { 
            setOption(section.option);
            router.push(section.option);
          }}
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