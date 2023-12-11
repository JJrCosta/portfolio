import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
  border-radius: 5px;
`

export const LinkButton = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: ${(props) => props.theme.backgroungButtonColor};
  padding: 8px;
  margin-top: 24px;
  font-size: 14px;
  color: ${(props) => props.theme.lightColor};
  cursor: pointer;
  border-radius: 5px;
`
