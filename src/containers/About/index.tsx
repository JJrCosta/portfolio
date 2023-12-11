import Title from '../../components/Title'
import Texts from '../../components/Texts'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Texts color="secondary">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo animi
      ipsa reiciendis, sint non necessitatibus, et soluta officiis, dolorem
      quisquam enim doloremque voluptates inventore laudantium cupiditate a
      placeat ut quod?
    </Texts>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=JJrcosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JJrcosta&layout=compact&langs_count=8&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
