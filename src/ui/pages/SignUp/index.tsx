import InputWithLabel from '@/ui/atoms/Input';
import Button from '@/ui/atoms/Button';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import Card from '@/ui/atoms/Card';
import * as S from './styled';

const SignUpPage = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.WrapperItems>
        <S.WrapperTexts>
          <S.Title>Criar Conta</S.Title>
          <S.Subtitle>Comece a organizar sua vida hoje</S.Subtitle>
        </S.WrapperTexts>

        <Card>
          <S.WrapperInputsCard>
            <InputWithLabel 
              label='Nome Completo'
              inputType='text'
              placeholder='João Silva'
              onChange={() => {}}
            />

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
              label='Criar Conta'
              variant='primary'
              styles={{ height: '4.4rem' }}
              onClick={() => {}}
            />

            <Button 
              label='Já tem uma conta? Entre'
              variant='ghost'
              onClick={() => { router.push('/sign-in') }}
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

export default SignUpPage;