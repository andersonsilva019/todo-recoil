import styled, { css } from 'styled-components'

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
`

interface ChangeStatusTaskButtonProps {
  isCompleted: boolean
}

export const ChangeStatusTaskButton = styled.button<ChangeStatusTaskButtonProps>`
  border: 2px solid ${props => props.theme['blue']};
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.isCompleted && `
    border: 0;
    background-color: ${props.theme['purple-dark']};
    padding: 0.13rem;
  `}
`

export const DeleteTaskButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

interface TaskTitleProps {
  isCompleted: boolean
}

export const TodoTitle = styled.p<TaskTitleProps>`
  color: ${props => props.theme['gray-100']};
  font-size: 1rem;
  line-height: 140%;

  ${props => props.isCompleted && css`
    text-decoration: line-through;
    color: ${props.theme['gray-300']};
  `}
`