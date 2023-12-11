import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container, ResetGlobal } from './Reset'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import lightTheme from './Themes/light'
import darkTheme from './Themes/dark'

function App() {
  const [darkThemeApplied, setdarkThemeApplied] = useState(false)

  function themeChange() {
    setdarkThemeApplied(!darkThemeApplied)
  }

  return (
    <ThemeProvider theme={darkThemeApplied ? darkTheme : lightTheme}>
      <ResetGlobal />
      <Container>
        <Sidebar themeChange={themeChange} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
