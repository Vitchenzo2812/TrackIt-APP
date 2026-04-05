import Card from '@/ui/atoms/Card';
import { MoveLeft } from 'lucide-react';
import * as S from './styled';
import InputWithLabel from '@/ui/molecules/Input';
import Button from '@/ui/atoms/Button';
import { useRouter } from 'next/router';
import Typography from '@/ui/atoms/Typography';

const SignInPage = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.WrapperItems>
        <S.WrapperTexts>
          <Typography
            as='h1'
            size='3rem'
            color='#2E2E2E'
            weight={500}
          >
            Bem-vindo de Volta
          </Typography>

          <Typography color='#7A7A7A'>
            Entre para continuar sua jornada
          </Typography>
        </S.WrapperTexts>

        <Card 
          responsiveStyles={{ 
            width: { mobile: '33rem', desktop: '44.8rem' },
            padding: '3.2rem' 
          }}>
          <S.WrapperInputsCard>
            <InputWithLabel
              label='E-mail'
              inputType='email'
              placeholder='voce@exemplo.com'
              onChange={() => {}}
            />

            <InputWithLabel 
              label='Senha'
              inputType='password'
              placeholder='••••••••'
              onChange={() => {}}
            />
          </S.WrapperInputsCard>

          <S.WrapperButtonsCard>
            <Button
              label='Entrar'
              variant='primary'
              styles={{ height: '4.4rem' }}
              onClick={() => {}}
            />

            <Button 
              label='Não tem uma conta? Crie uma'
              variant='ghost'
              onClick={() => { router.push('/sign-up') }}
              styles={{ height: '2.4rem', padding: '0rem' }}
            />
          </S.WrapperButtonsCard>
        </Card>

        <Button 
          label='Voltar para Início'
          variant='ghost'
          onClick={() => { router.push('/') }}
          leftIcon={<MoveLeft width={15} height={15} color='#7A7A7A' />}
        />
      </S.WrapperItems>
    </S.Container>
  );
}

export default SignInPage;