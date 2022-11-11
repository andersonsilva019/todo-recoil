import { CreateTodoButton } from './styles'
import { PlusCircle } from 'phosphor-react'

export function CreateTodoForm() {
  return (
    <form>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <CreateTodoButton type="submit">
        <span>Criar</span>
        <PlusCircle size={18} weight="bold" />
      </CreateTodoButton>
    </form>
  )
}