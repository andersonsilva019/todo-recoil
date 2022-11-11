import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 4rem auto 0;
` 

export const HeaderList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CreatedTasks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${props => props.theme['blue']};
    font-size: 0.875rem;
  }

  span {
    color: ${props => props.theme['gray-200']};
    font-size: 0.75rem; 
    background-color: ${props => props.theme['gray-400']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    font-weight: 700;
  }
`

export const CompletedTasks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${props => props.theme['purple']};
    font-size: 0.875rem;
  }

  span {
    color: ${props => props.theme['gray-200']};
    font-size: 0.75rem; 
    background-color: ${props => props.theme['gray-400']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    font-weight: 700;
  }
`

export const TodoList = styled.ul`
  margin-top: 1.5rem;
`