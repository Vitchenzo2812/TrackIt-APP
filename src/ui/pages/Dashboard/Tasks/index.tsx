import DashboardLayout from '@/ui/templates/DashboardLayout';
import Typography from '@/ui/atoms/Typography';
import Button from '@/ui/atoms/Button';
import { FolderKanban, Funnel, Plus } from 'lucide-react';
import * as S from './styled';
import Card from '@/ui/atoms/Card';
import { useState } from 'react';
import TaskCard from '@/ui/organisms/TaskCard';
import useDragScroll from '@/ui/hooks/use-drag-scroll';

type TTaskStatus = 'all' | 'pending' | 'completed';
type TTaskGroupMock = 'all' | 'work' | 'personal' | 'health' | 'apprenticeship';

type TFilterStatus<T> = {
  status: T,
  label: string,
  number?: number
};

const FilterStatus: TFilterStatus<TTaskStatus>[] = [
  { status: 'all', label: 'Todas' },
  { status: 'pending', label: 'Pendentes' },
  { status: 'completed', label: 'Concluídas' },
]

const GroupsMock: TFilterStatus<TTaskGroupMock>[] = [
  { status: 'all', label: 'Todos os Grupos' },
  { status: 'work', label: 'Trabalho', number: 2 },
  { status: 'personal', label: 'Pessoal', number: 1 },
  { status: 'health', label: 'Saúde', number: 2 },
  { status: 'apprenticeship', label: 'Aprendizado', number: 1 },
];

const TasksPage = () => {
  const [filterStatus, setFilterStatus] = useState<TTaskStatus>('all');
  const [filterGroup, setFilterGroup] = useState<TTaskGroupMock>('all');

  const { ref: filtersRef, events: filtersEvents, hasDragged: filtersHasDragged } = useDragScroll<HTMLDivElement>();
  const { ref: groupsRef, events: groupsEvents, hasDragged: groupsHasDragged } = useDragScroll<HTMLDivElement>();

  return (
    <DashboardLayout>
      <S.WrapperAllItems>
        <S.WrapperHeaderTasks>
          <S.WrapperHeaderTexts>
            <Typography
              as='h1'
              color='#2E2E2E'
              size='3rem'
              weight={500}
            >
              Tarefas
            </Typography>

            <Typography
              color='#7A7A7A'
              size='1.6rem'
            >
              6 tarefas
            </Typography>
          </S.WrapperHeaderTexts>

          <Button 
            label='Adicionar Tarefa'
            variant='primary'
            leftIcon={<Plus width={16} height={16} color='#FFFFFF' />}
            onClick={() => {}}
            styles={{
              width: '18.5rem',
              height: '4.4rem',
              padding: '1rem 2rem',
              gap: '0.4rem'
            }}
          />
        </S.WrapperHeaderTasks>

        <S.WrapperFilterCards>
          <Card>
            <S.WrapperFilters>
              <Funnel width={20} height={20} color='#7A7A7A' />
              
              <S.WrapperFilterStatus
                ref={filtersRef}
                {...filtersEvents}
              >
                {FilterStatus.map(filter => (
                  <Button
                    key={filter.status}
                    label={filter.label}
                    isSelected={filterStatus === filter.status}
                    variant='gray-red'
                    onClick={(e) => {
                      if (filtersHasDragged) {
                          e.preventDefault();
                          return;
                        }

                      setFilterStatus(filter.status) 
                    }}
                    styles={{
                      height: '4rem',
                      padding: '0.8rem 1.6rem'
                    }}
                  />
                ))}
              </S.WrapperFilterStatus>
            </S.WrapperFilters>
          </Card>

          <Card>
            <S.WrapperFilters>
              <FolderKanban width={20} height={20} color='#7A7A7A' />

              <S.WrapperFilterGroups
                ref={groupsRef}
                {...groupsEvents}
              >
                {GroupsMock.map(filter => (
                  <Button
                    key={filter.status}
                    label={filter.label}
                    numberInChip={filter.number}
                    isSelected={filterGroup === filter.status}
                    variant='gray-orange'
                    onClick={(e) => { 
                      if (groupsHasDragged) {
                        e.preventDefault();
                        return;
                      }

                      setFilterGroup(filter.status) 
                    }}
                    styles={{
                      width: '100%',
                      height: '4rem',
                      padding: '0.8rem 1.6rem',
                      whiteSpace: 'nowrap'
                    }}
                  />
                ))}
              </S.WrapperFilterGroups>

              <Button
                variant='outline-orange'
                onClick={() => {}}
                leftIcon={<Plus width={16} height={16} color='#F4A261' />}
                styles={{
                  height: '4rem',
                  padding: '0.8rem 1.2rem'
                }}
              />
            </S.WrapperFilters>
          </Card>
        </S.WrapperFilterCards>

        <S.WrapperTasks>
          <TaskCard />
        </S.WrapperTasks>
      </S.WrapperAllItems>
    </DashboardLayout>
  );
}

export default TasksPage;