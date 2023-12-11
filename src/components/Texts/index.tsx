import { Text } from './styles'

export type Props = {
  children?: string
  color?: 'primary' | 'secondary'
  fontSize?: number
}

const Texts = ({ children, color = 'primary', fontSize }: Props) => (
  <Text fontSize={fontSize} color={color}>
    {children}
  </Text>
)

export default Texts
