import Texts from '../Texts'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const ProjectCard = () => (
  <Card>
    <Title>Nome do Projeto</Title>
    <Texts color="secondary">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Texts>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default ProjectCard
