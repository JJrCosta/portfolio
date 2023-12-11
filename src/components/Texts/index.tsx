import { Text } from './styles'

export type Props = {
  children: string
  color?: 'primary' | 'secondary'
}

const Texts = ({ children, color = 'primary' }: Props) => (
  <Text color={color}>{children}</Text>
)

export default Texts
