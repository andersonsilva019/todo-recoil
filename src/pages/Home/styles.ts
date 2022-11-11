import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: 0 20px;
`

export const Header = styled.header`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme['gray-700']};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.main`

  margin-top: -1.5rem;

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  
  input {
    width: 100%;
    background-color: ${props => props.theme['gray-500']};
    padding: 1rem;
    border: 0;
    color: ${props => props.theme['gray-100']};
    flex: 1;
    border-radius: 8px;
  }
`