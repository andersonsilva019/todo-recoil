import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Container, Content, Header, Main } from './styles'

import logo from '../../assets/Logo.svg'
import { CreateTodoForm } from './CreateTodoForm'
import { ListTodos } from './ListTodos'
import { todoListAtom } from '../../lib/recoil/Atoms'
import { useState } from 'react'
import { todosSelector } from '../../lib/recoil/Selectors'

export function HomePage() {

  const setTodoList = useSetRecoilState(todoListAtom)
  const { totalNum, todoList } = useRecoilValue(todosSelector)
  const [todoTitle, setTodoTitle] = useState('')

  function addTodo() {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: totalNum + 1,
        title: todoTitle,
        completed: false,
      },
    ])

    setTodoTitle('')
  }

  function removeTodo(id: number){
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }

  function changeTodoStatus(id: number){
    const newTodoList = todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    setTodoList(newTodoList)
  }

  function onChangeTodoTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoTitle(event.target.value)
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Content>
        <Main>
          <CreateTodoForm
            addTodo={addTodo}
            onChangeTodoTitle={onChangeTodoTitle}
            todoTitle={todoTitle}
          />
          <ListTodos removeTodo={removeTodo} changeTodoStatus={changeTodoStatus}/>
        </Main>
      </Content>
    </Container>
  )
}