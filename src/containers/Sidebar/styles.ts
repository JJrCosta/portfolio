import styled from 'styled-components'
import { Text } from '../../components/Texts/styles'

export const Description = styled(Text)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.lightColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  margin-bottom: 40px;
  text-align: center;
`
