import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: beige;
`

export const Viewerer = ({ text }) => {
  return (
    <div>
      <div>{text}asdd</div>
      <StyledButton>add</StyledButton>
      <div>brr</div>
    </div>
  )
}
