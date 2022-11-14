import { atom } from 'recoil'

interface TodoListStateProps {
  id: number
  title: string
  completed: boolean
}

export const todoListAtom = atom<TodoListStateProps[]>({
  key: 'todoList',
  default: [],
})