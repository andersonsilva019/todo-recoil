import styled from 'styled-components'

export const Container = styled.li`
  list-style: none;
  width: 100%;
  background-color: ${props => props.theme['gray-500']};
  border: 1px solid ${props => props.theme['gray-400']};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  p {
    color: ${props => props.theme['gray-100']};
    font-size: 1rem;
    line-height: 140%;
  }
`

export const ChangeStatusTaskButton = styled.button`
  border: 2px solid ${props => props.theme['blue']};
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
`

export const DeleteTaskButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`