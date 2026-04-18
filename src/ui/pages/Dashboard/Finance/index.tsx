import DashboardLayout from "@/ui/templates/DashboardLayout";
import { Calendar, Plus, TrendingUp } from "lucide-react";
import FinanceCard from "@/ui/molecules/FinanceCard";
import Typography from "@/ui/atoms/Typography";
import Button from "@/ui/atoms/Button";
import Card from "@/ui/atoms/Card";
import * as S from './styled';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useMemo, useState } from "react";
import RecentlyTransactionCard from "@/ui/molecules/RecentlyTransactionCard";
import Icon from "@/ui/atoms/Icon";

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

const COLORS = ["#E76F51", "#F4A261", "#E9C46A", "#36BA98", "#264653"];

const FinancePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    // Março 2026
    {
      id: "1",
      title: "Salário",
      amount: 5000,
      type: "income",
      category: "Salário",
      date: "2026-03-15",
    },
    {
      id: "2",
      title: "Compras no mercado",
      amount: 250,
      type: "expense",
      category: "Alimentação",
      date: "2026-03-20",
    },
    {
      id: "3",
      title: "Projeto freelance",
      amount: 800,
      type: "income",
      category: "Freelance",
      date: "2026-03-22",
    },
    {
      id: "4",
      title: "Pagamento de aluguel",
      amount: 1200,
      type: "expense",
      category: "Moradia",
      date: "2026-03-01",
    },
    {
      id: "5",
      title: "Contas de serviços",
      amount: 150,
      type: "expense",
      category: "Contas",
      date: "2026-03-10",
    },
    {
      id: "6",
      title: "Restaurante",
      amount: 180,
      type: "expense",
      category: "Alimentação",
      date: "2026-03-25",
    },
    {
      id: "7",
      title: "Gasolina",
      amount: 200,
      type: "expense",
      category: "Transporte",
      date: "2026-03-12",
    },
    // Abril 2026 (mês atual)
    {
      id: "8",
      title: "Salário",
      amount: 5000,
      type: "income",
      category: "Salário",
      date: "2026-04-01",
    },
    {
      id: "9",
      title: "Supermercado",
      amount: 320,
      type: "expense",
      category: "Alimentação",
      date: "2026-04-02",
    },
    {
      id: "10",
      title: "Academia",
      amount: 150,
      type: "expense",
      category: "Saúde",
      date: "2026-04-03",
    },
    {
      id: "11",
      title: "Aluguel",
      amount: 1200,
      type: "expense",
      category: "Moradia",
      date: "2026-04-01",
    },
    {
      id: "12",
      title: "Internet",
      amount: 100,
      type: "expense",
      category: "Contas",
      date: "2026-04-03",
    },
    {
      id: "17",
      title: "Cinema",
      amount: 80,
      type: "expense",
      category: "Lazer",
      date: "2026-04-02",
    },
    {
      id: "18",
      title: "Farmácia",
      amount: 120,
      type: "expense",
      category: "Saúde",
      date: "2026-04-03",
    },
    // Fevereiro 2026
    {
      id: "13",
      title: "Salário",
      amount: 5000,
      type: "income",
      category: "Salário",
      date: "2026-02-15",
    },
    {
      id: "14",
      title: "Aluguel",
      amount: 1200,
      type: "expense",
      category: "Moradia",
      date: "2026-02-01",
    },
    {
      id: "15",
      title: "Compras diversas",
      amount: 450,
      type: "expense",
      category: "Alimentação",
      date: "2026-02-10",
    },
    {
      id: "16",
      title: "Luz e água",
      amount: 200,
      type: "expense",
      category: "Contas",
      date: "2026-02-08",
    },
  ]);
  
  const monthlyData = [
    { month: "Jan", receitas: 4500, despesas: 3200 },
    { month: "Fev", receitas: 5200, despesas: 3800 },
    { month: "Mar", receitas: 1000, despesas: 1000 },
  ];

  const chartData = useMemo(() => {
    const categoryTotals: Record<string, number> = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        categoryTotals[t.category] =
          (categoryTotals[t.category] || 0) + t.amount;
      });

    return Object.entries(categoryTotals).map(([name, value]) => ({
      name,
      value,
    }));
  }, [transactions]);

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

              <Icon color='green'>
                <TrendingUp color='#36BA98' />
              </Icon>
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

              <Icon color='red'>
                <TrendingUp color='#E76F51' />
              </Icon>
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

              <Icon color='orange'>
                <TrendingUp color='#F4A261' />
              </Icon>
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

        <S.WrapperGraphics>
          <Card styles={{
            width: '60.4rem',
            minHeight: '39.3rem',
            padding: '2.4rem',
          }}>
            <Typography
              as='h3'
              color='#2E2E2E'
              size='1.8rem'
              weight={500}
              styles={{ paddingBottom: '1.6rem' }}
            >
              Visão Mensal
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
                <XAxis dataKey="month" stroke="#7A7A7A" />
                <YAxis stroke="#7A7A7A" />
                <Tooltip />
                <Legend />
                <Bar dataKey="receitas" fill="#36BA98" radius={[8, 8, 0, 0]} name="Receitas" />
                <Bar dataKey="despesas" fill="#E76F51" radius={[8, 8, 0, 0]} name="Despesas" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card styles={{
            width: '60.4rem',
            minHeight: '39.3rem',
            padding: '2.4rem',
          }}>
            <Typography
              as='h3'
              color='#2E2E2E'
              size='1.8rem'
              weight={500}
              styles={{ paddingBottom: '1.6rem' }}
            >
              Despesas por Categoria
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 1) * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      fontSize='1.6rem'
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </S.WrapperGraphics>

        <Card styles={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2.4rem'
        }}>
          <Typography
            as='h3'
            color='#2E2E2E'
            size='1.8rem'
            weight={500}
          >
            Transações Recentes
          </Typography>

          <RecentlyTransactionCard />
          <RecentlyTransactionCard />
          <RecentlyTransactionCard />
        </Card>
      </S.WrapperAllItems>
    </DashboardLayout>
  )
}

export default FinancePage;