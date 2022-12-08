import './App.css'
import { ProjectsGrid } from './components/views/ProjectsGrid'
import styled from 'styled-components'
import React, { useState } from 'react'

const StyledAppWrapper = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <StyledAppWrapper>
      <ProjectsGrid active={active} handleActive={handleActive} />
    </StyledAppWrapper>
  )
}

export default App
