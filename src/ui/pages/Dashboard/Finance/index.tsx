import DashboardLayout from "@/ui/templates/DashboardLayout";
import { Calendar, Plus, TrendingUp } from "lucide-react";
import FinanceCard from "@/ui/molecules/FinanceCard";
import Typography from "@/ui/atoms/Typography";
import Button from "@/ui/atoms/Button";
import Card from "@/ui/atoms/Card";
import * as S from './styled';

const FinancePage = () => {
  return (
    <DashboardLayout>
      <S.WrapperAllItems>
        <S.WrapperTitleButtons>
          <S.WrapperTitleSubtitle>
            <Typography
              as='h1'
              size='3rem'
              color='#2E2E2E'
            >
              Finanças
            </Typography>

            <Typography color='#7A7A7A'>
              Acompanhe suas receitas e despesas
            </Typography>
          </S.WrapperTitleSubtitle>

          <S.WrapperButtons>
            <Button
              label='Adicionar Receita'
              variant='secondary'
              onClick={() => {}}
              leftIcon={<Plus width={16} height={16} color='#FFFFFF' />}
              styles={{
                height: '4.4rem',
                padding: '1rem 2rem', 
                borderRadius: '1.6rem', 
                gap: '0.4rem' 
              }}
            />

            <Button 
              label='Adicionar Despesa'
              variant='primary'
              onClick={() => {}}
              leftIcon={<Plus width={16} height={16} color='#FFFFFF' />}
              styles={{
                height: '4.4rem',
                padding: '1rem 2rem', 
                borderRadius: '1.6rem', 
                gap: '0.4rem' 
              }}
            />
          </S.WrapperButtons>
        </S.WrapperTitleButtons>

        <S.WrapperCards>
          <Card
            hover
            className={['responsive-finance-card']}
            styles={{
              minHeight: '13.8rem',
              padding: '2.4rem'
            }}
          >
            <S.WrapperSectionCard>
              <S.WrapperCardTexts>
                <Typography
                  color='#7A7A7A'
                >
                  Receitas Totais
                </Typography>

                <Typography
                  as='h2'
                  size='3rem'
                  weight={500}
                  color='#2E2E2E'
                >
                  R$ 15.800
                </Typography>
              </S.WrapperCardTexts>

              <S.IconCard color='green'>
                <TrendingUp color='#36BA98' />
              </S.IconCard>
            </S.WrapperSectionCard>
          </Card>

          <Card
            hover
            className={['responsive-finance-card']}
            styles={{
              minHeight: '13.8rem',
              padding: '2.4rem'
            }}
          >
            <S.WrapperSectionCard>
              <S.WrapperCardTexts>
                <Typography
                  color='#7A7A7A'
                >
                  Despesas Totais
                </Typography>

                <Typography
                  as='h2'
                  size='3rem'
                  weight={500}
                  color='#2E2E2E'
                >
                  R$ 5.800
                </Typography>
              </S.WrapperCardTexts>

              <S.IconCard color='red'>
                <TrendingUp color='#E76F51' />
              </S.IconCard>
            </S.WrapperSectionCard>
          </Card>

          <Card
            hover
            className={['responsive-finance-card']}
            styles={{
              minHeight: '13.8rem',
              padding: '2.4rem'
            }}
          >
            <S.WrapperSectionCard>
              <S.WrapperCardTexts>
                <Typography
                  color='#7A7A7A'
                >
                  Saldo
                </Typography>

                <Typography
                  as='h2'
                  size='3rem'
                  weight={500}
                  color='#2E2E2E'
                >
                  R$ 10.000
                </Typography>

                <Typography
                  size="1.4rem"
                  color="#36BA98"
                >
                  Saldo positivo
                </Typography>
              </S.WrapperCardTexts>

              <S.IconCard color='orange'>
                <TrendingUp color='#F4A261' />
              </S.IconCard>
            </S.WrapperSectionCard>
          </Card>
        </S.WrapperCards>

        <S.WrapperTitleMonthlyExpenses>
          <Calendar width={20} height={20} color="#E76F51" />
          <Typography
            size='2rem'
            color='#2E2E2E'
            weight={500}
          >
            Despesas Mensais
          </Typography>
        </S.WrapperTitleMonthlyExpenses>

        <S.WrapperCards>
          <FinanceCard />
          <FinanceCard />
          <FinanceCard />
          <FinanceCard />
        </S.WrapperCards>
      </S.WrapperAllItems>
    </DashboardLayout>
  )
}

export default FinancePage;