import { Trash, Check } from 'phosphor-react'
import { 
  Container,
  Box,
  ChangeStatusTaskButton,
  DeleteTaskButton,
  TodoTitle
} from './styles'

interface TodoItemProps {
  id: number
  title: string
  completed: boolean
  removeTodo: (id: number) => void
  changeTodoStatus: (id: number) => void
}

export function TodoItem({
  id,
  title,
  completed,
  removeTodo,
  changeTodoStatus
}: TodoItemProps) {

  return (
    <Container>
      <Box>
        <ChangeStatusTaskButton 
          onClick={() => changeTodoStatus(id)}
          isCompleted={completed}
        >
          {completed ? <Check size={16} color="#FFFFFF"/> : ''}
        </ChangeStatusTaskButton>
        <TodoTitle isCompleted={completed}>{title}</TodoTitle>
      </Box>
      <DeleteTaskButton onClick={() => removeTodo(id)}>
        <Trash size={24} color="#808080" />
      </DeleteTaskButton>
    </Container>
  )
}