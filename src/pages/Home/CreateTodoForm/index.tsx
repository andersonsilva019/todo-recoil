import { CreateTodoButton } from './styles'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

interface CreateTodoFormProps {
  addTodo: () => void
  onChangeTodoTitle: (event: React.ChangeEvent<HTMLInputElement>) => void
  todoTitle: string
}

export function CreateTodoForm({ 
  addTodo,
  onChangeTodoTitle,
  todoTitle 
}: CreateTodoFormProps) {
  return (
    <form>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeTodoTitle}
        value={todoTitle}
      />
      <CreateTodoButton type="button" onClick={addTodo}>
        <span>Criar</span>
        <PlusCircle size={18} weight="bold" />
      </CreateTodoButton>
    </form>
  )
}