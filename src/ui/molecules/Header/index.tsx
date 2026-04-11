import { Sections, TSectionOption } from '@/ui/routes/types';
import Typography from '@/ui/atoms/Typography';
import { useRouter } from 'next/router';
import Button from '@/ui/atoms/Button';
import { useState } from 'react';
import * as S from './styled';

interface Props {
  isMobile: boolean
}

const Header = ({ isMobile }: Props) => {
  const router = useRouter(); 
  const [option, setOption] = useState<TSectionOption>(router.pathname.split('/')[2] as TSectionOption);

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

      {!isMobile && (
        <S.WrapperButtons>
          {Sections.map(section => (
            <Button
              variant='ghost'
              key={section.option}
              label={section.label}
              leftIcon={section.icon}
              isSelected={section.option === option}
              onClick={() => { 
                setOption(section.option);
                router.push(section.option);
              }}
              styles={{ height: '4rem', padding: '0.8rem 1.6rem' }}
            />
          ))}
        </S.WrapperButtons>
      )}

      <S.WrapperIcons>
        <S.UserIcon />
        <S.LogOutIcon />
      </S.WrapperIcons>
    </S.Container>
  );
}

export default Header;