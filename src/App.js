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
const StyledDiv = styled.div``

function App() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    console.log('clip', active)
    setActive(!active)
  }

  return (
        <StyledAppWrapper>
          <ProjectsGrid active={active} handleActive={handleActive} />
        </StyledAppWrapper>
  )
}

export default App
