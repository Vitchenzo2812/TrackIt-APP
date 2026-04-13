import Typography from '@/ui/atoms/Typography';
import * as S from './styled';
import Button from '@/ui/atoms/Button';
import { useRouter } from 'next/router';
import { MoveLeft } from 'lucide-react';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <S.Container>
      <Typography
        as='h1'
        size='4rem'
        weight={500}
        color='#2E2E2E'
      >
        Ops… algo deu errado
      </Typography>
      <Typography color='#7A7A7A'>
        Essa página não existe ou foi removida.
      </Typography>

      <Button
        label='Voltar'
        variant='ghost'
        onClick={() => { router.back() }}
        leftIcon={<MoveLeft width={15} height={15} color='#7A7A7A' />}
      />
    </S.Container>
  );
}

export default NotFoundPage;