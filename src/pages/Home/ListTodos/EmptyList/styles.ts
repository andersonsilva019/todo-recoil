import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 140%;

  margin: 4rem auto;

  img {
    margin-bottom: 1rem;
  }

  strong {
    color: ${props => props.theme['gray-300']};
  }
  
  p {
    font-weight: regular;
    color: ${props => props.theme['gray-300']};
  }
`

export const Separator = styled.hr`
  margin-top: 1.5rem;
  border: 1px solid ${props => props.theme['gray-400']} ;  
`