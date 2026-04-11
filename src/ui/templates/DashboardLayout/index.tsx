import { PropsWithChildren } from 'react';
import * as S from './styled';
import useIsMobile from '@/ui/hooks/use-is-mobile';
import Header from '@/ui/molecules/Header';
import NavItems from '@/ui/molecules/NavItems';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useIsMobile('(max-width: 887px)');

  return (
    <S.Container>
      <S.WrapperPage>
        <Header isMobile={isMobile} />
        {isMobile && <NavItems />}
        {children}
      </S.WrapperPage>
    </S.Container>
  );
}

export default DashboardLayout;