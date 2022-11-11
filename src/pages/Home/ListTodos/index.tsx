import { EmptyList } from './EmptyList'
import {
  Container,
  HeaderList,
  CreatedTasks,
  CompletedTasks,
  TodoList
} from './styles'
import { TodoItem } from './TodoItem'

export function ListTodos() {
  return (
    <Container>
      <HeaderList>
        <CreatedTasks>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </CreatedTasks>
        <CompletedTasks>
          <strong>Concluídas</strong>
          <span>0</span>
        </CompletedTasks>
      </HeaderList>
      <TodoList>
        <TodoItem id={1} title='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
      </TodoList>
    </Container>
  )
}