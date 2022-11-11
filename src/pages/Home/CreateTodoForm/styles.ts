import styled from 'styled-components'

export const CreateTodoButton = styled.button`
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.theme['blue-dark']};
  color: ${props => props.theme['gray-100']};
  cursor: pointer;
  
  span {
    font-weight: bold;
    font-size: 0.875rem;
  }
`