import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  cursor: pointer;
  position: fixed;
  bottom: -130px;
  right: -150px;
  transform: rotate(-45deg);
  transition-timing-function: ease-in-out;
  transition: 0.7s;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    125deg,
    rgba(252, 143, 35, 0.55),
    rgba(252, 143, 35, 0.4)
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 10px 20px, rgba(0, 0, 0, 0.13) 0px 6px 6px;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 30px 90px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  box-shadow: rgba(0, 0, 0, 0.76) 0px -12px 70px 4px;

  color: rgba(0, 0, 0, 0.99);
  ${({ active }) =>
    active &&
    css`
      position: fixed;
      bottom: 0px;
      right: 0px;
      background: linear-gradient(
        125deg,
        rgba(252, 143, 35, 0.65),
        rgba(252, 143, 35, 0.25)
      );
      padding: 20px 0;
      transform: rotate(0deg);
      border-radius: 15px;
      transition-timing-function: ease-in;
      transition: 0.8s;
    `}
`

const StyledContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  padding: 20px 10px;
  font-size: 20px;
`
const StyledContactTypes = styled.div`
  padding: 0 0 0 20px;
`

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 3fr;
  padding: 0 10px;
`

const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px;
  &:hover {
    background: linear-gradient(
      125deg,
      rgba(252, 255, 255, 0.25),
      rgba(252, 255, 255, 0.15)
    );
  }
`

const ContactDetails = () => {
  return (
    <StyledContactDetails>
      &#123;
      {contactTypes}
      &#125;
    </StyledContactDetails>
  )
}

const contacts = {
  mobile: '48506145094',
  email: 'stasiak.gregor@gmail.com',
  linkedIn: 'grzegorz.stasiak',
}

const contactTypes = Object.entries(contacts).map(
  ([contactType, contactValue]) => {
    return (
      <StyledContactTypes key={Math.random()}>
        {`"${contactType}"`}: {`"${contactValue}"`},
      </StyledContactTypes>
    )
  }
)

export const Contact = ({ active, handleActive }) => {
  return (
    <Wrapper>
      <StyledContact active={active}>
        <StyledHeader>
          <CloseBtn onClick={handleActive}>X</CloseBtn>
          <div onClick={() => handleActive()}>Contact</div>
        </StyledHeader>
        <ContactDetails />
      </StyledContact>
    </Wrapper>
  )
}
