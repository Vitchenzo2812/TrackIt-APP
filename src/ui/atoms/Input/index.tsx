import { CSSProperties } from 'react';
import * as S from './styled';

export type TInputType = 'text' | 'email' | 'password';

interface Props {
  label: string;
  inputType: TInputType
  placeholder: string;
  onChange: (value: string) => void;
  styles?: CSSProperties;
}

const InputWithLabel = ({ label, inputType, placeholder, onChange, styles }: Props) => {
  return (
    <S.WrapperLabelInput style={styles}>
      <S.Label>{label}</S.Label>
      <S.Input 
        type={inputType}
        placeholder={placeholder}
        onChange={(evt) => { onChange(evt.target.value) }}
      />
    </S.WrapperLabelInput>
  );
}

export default InputWithLabel;