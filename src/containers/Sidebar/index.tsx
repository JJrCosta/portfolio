import Avatar from '../../components/Avatar'
import Texts from '../../components/Texts'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Junior Costa</Title>
      <Texts color="secondary" fontSize={16}>
        @JJrcosta
      </Texts>
      <Description color="primary" fontSize={12}>
        Engenheiro de Software | Desenvolvedor Full-stack Python
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
