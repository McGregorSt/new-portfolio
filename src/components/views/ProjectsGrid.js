import React, { useState } from 'react'
import styled from 'styled-components'
import { oldProjects } from '../../data/projectsList'
import { Contact } from '../Contact'
import { GridTile } from '../GridTile'
import { Project } from '../Project'

const StyledGrid = styled.div`
  width: 85%;
`

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  & :nth-child(1) {
    grid-template-rows: 2fr 1fr;
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }
  & :nth-child(2) {
    /* grid-column: 4 / 4;
    grid-row: 2 / 2; */
  }
  & :nth-child(6) {
    grid-column: 3 / 3;
    grid-row: 3 / 4;
  }
  & :nth-child(3) {
    grid-column: 4 / 4;
    grid-row: 3 / 3;
  }
  & :nth-child(1) {
    background: rgba(0, 0, 0, 0.7);
    color: rgba(255, 255, 255, 0.5);
    grid-gap: 10px;
    border-radius: 15px;
    font-size: 32px;

    & :nth-child(1) {
      background: transparent;
      /* border: 2px solid black; */
    }
  }

  & :nth-child(n + 2) {
    height: 80px;
    backdrop-filter: blur(20px);
    font-size: 24px;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      cursor: pointer;
      backdrop-filter: blur(7px);
    }
  }
`
const StyledGridTile = styled.div`
  ${GridTile};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
`

const StyledViewer = styled.div`
  border-radius: 10px;
`

const StyledButton = styled.div`
`

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  backdrop-filter: blur(1px);
  /* border: none; */
`

export const ProjectsGrid = ({ active, handleActive }) => {
  const [showOnViewer, setShowOnViewer] = useState()
  const [startTypewriting, setStartTypewriting] = useState(false)
  const [endTypewriting, setEndTypewriting] = useState(false)
  const [link, setLink] = useState('')

  const handleClick = (project) => {
    setShowOnViewer(project.description)
    typewriting(project.description, 1)
    setLink(project.link)
    console.log(project.link)
  }

  const handleGoToBtn = () => {}

  const typewriting = (text, i) => {
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setStartTypewriting(true)
        setShowOnViewer(text.substring(0, i + 1))
        i += 1
      } else {
        console.log('end')
        setTimeout(() => {
          setStartTypewriting(false)
          setEndTypewriting(true)
        }, 1200)
        clearInterval(typeInterval)
      }
    }, 30)
  }

  return (
    <StyledGrid>
      <StyledWrapper>
        <StyledGridTile>
          <StyledViewer>{showOnViewer}</StyledViewer>
          <>
            {endTypewriting && !startTypewriting ? (
              <StyledLink href={link} target="_blank">
                <StyledButton onClick={() => handleGoToBtn()}>
                  GO TO
                </StyledButton>
              </StyledLink>
            ) : (
              ''
            )}
          </>
        </StyledGridTile>
        {oldProjects.map((project, index) =>
          index > 0 ? (
            <Project
              key={Math.random()}
              project={project}
              index={index}
              handleClick={handleClick}
            ></Project>
          ) : (
            ''
          )
        )}
      </StyledWrapper>
      <Contact handleActive={handleActive} active={active} />
    </StyledGrid>
  )
}
