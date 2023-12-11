import { Container, ResetGlobal } from './Reset'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <ResetGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
