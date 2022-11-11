import { Trash } from 'phosphor-react'
import { Container, Box, ChangeStatusTaskButton, DeleteTaskButton } from './styles'

interface TodoItemProps {
  id: number
  title: string
}

export function TodoItem({ id , title }: TodoItemProps) {
  return (
    <Container>
      <Box>
        <ChangeStatusTaskButton />
        <p>{title}</p>
      </Box>
      <DeleteTaskButton>
        <Trash size={24} color="#808080" />
      </DeleteTaskButton>
    </Container>
  )
}