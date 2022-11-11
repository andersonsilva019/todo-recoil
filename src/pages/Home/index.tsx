import { Container, Content, Header, Main } from './styles'

import logo from '../../assets/Logo.svg'
import { CreateTodoForm } from './CreateTodoForm'
import { ListTodos } from './ListTodos'

export function HomePage() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Content>
        <Main>
          <CreateTodoForm/>
          <ListTodos/>
        </Main>
      </Content>
    </Container>
  )
}