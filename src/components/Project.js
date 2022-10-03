import React from "react"
import { GridTile } from "./GridTile"

export const Project = ({ project, handleClick }) => {
  const toDisplay = (
    <GridTile onClick={() => handleClick(project)}>{project.title}</GridTile>
  )

  return toDisplay
}
