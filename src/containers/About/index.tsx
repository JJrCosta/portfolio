import Title from '../../components/Title'
import Texts from '../../components/Texts'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Texts color="secondary">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo animi
      ipsa reiciendis, sint non necessitatibus, et soluta officiis, dolorem
      quisquam enim doloremque voluptates inventore laudantium cupiditate a
      placeat ut quod?
    </Texts>
    <div>
      <img src="https://github-readme-stats.vercel.app/api?username=JJrcosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JJrcosta&layout=compact&langs_count=7&theme=dracula" />
    </div>
  </section>
)

export default About
