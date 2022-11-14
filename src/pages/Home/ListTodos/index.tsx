import { useRecoilValue } from 'recoil'
import { todosSelector } from '../../../lib/recoil/Selectors'
import { EmptyList } from './EmptyList'
import {
  Container,
  HeaderList,
  CreatedTasks,
  CompletedTasks,
  TodoList
} from './styles'
import { TodoItem } from './TodoItem'

interface ListTodosProps {
  removeTodo: (id: number) => void
  changeTodoStatus: (id: number) => void
}

export function ListTodos({removeTodo, changeTodoStatus}: ListTodosProps) {

  const { todoList, totalNum, totalCompletedNum } = useRecoilValue(todosSelector)

  return (
    <Container>
      <HeaderList>
        <CreatedTasks>
          <strong>Tarefas criadas</strong>
          <span>{totalNum}</span>
        </CreatedTasks>
        <CompletedTasks>
          <strong>Concluídas</strong>
          <span>{totalNum === 0 ? 0 : `${totalCompletedNum} de ${totalNum}`}</span>
        </CompletedTasks>
      </HeaderList>
      {totalNum === 0 ? (
        <EmptyList />
      ) : (
        <TodoList>
          {todoList.map(todo => <TodoItem key={todo.id} changeTodoStatus={changeTodoStatus} removeTodo={removeTodo} {...todo} />)}
        </TodoList>
      )}
    </Container>
  )
}