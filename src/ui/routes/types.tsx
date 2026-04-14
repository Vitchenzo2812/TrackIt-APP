import { FolderKanban, LayoutDashboard, SquareCheckBig, Timer, Wallet } from 'lucide-react';
import { ReactElement } from "react"

export type TSectionOption = 'panel' | 'tasks' | 'groups' | 'finance' | 'pomodoro'

export type TSection = {
  option: TSectionOption,
  label: string,
  icon: ReactElement,
  disabled?: boolean,
}

export const Sections: TSection[] = [
  { option: 'panel', label: 'Painel', icon: <LayoutDashboard width={20} height={20} /> },
  { option: 'tasks', label: 'Tarefas', icon: <SquareCheckBig width={20} height={20} /> },
  { option: 'groups', label: 'Grupos', icon: <FolderKanban width={20} height={20} /> },
  { option: 'finance', label: 'Finanças', icon: <Wallet width={20} height={20} />, disabled: true },
  { option: 'pomodoro', label: 'Pomodoro', icon: <Timer width={20} height={20} /> },
]