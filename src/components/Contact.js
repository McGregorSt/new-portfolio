import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const StyledContact = styled.div`
  /* width: 240px; */
  /* height: 120px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  /* background-color: aliceblue; */
  cursor: pointer;
  position: fixed;
  bottom: -130px;
  right: -150px;
  transform: rotate(-45deg);
  /* transition: bottom 2s, right 2s, font-size 2s; */
  transition-timing-function: ease-in-out;
  transition: 0.7s;
  border: 1px solid rgba(255, 255, 255, 0.12);
  /* border-radius: 15px; */
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
  /* padding: 20px 0; */

  /* &:hover {
    bottom: -280px;
    right: -280px;
    font-size: 32px;
  } */
  ${({ active }) =>
    active &&
    css`
      position: fixed;
      /* background-color: aquamarine; */
      /* width: 300px; */
      /* height: 320px; */
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

      /* &:hover {
        bottom: 280px;
        right: 280px;
        font-size: 32px;
      } */
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
  grid-template-columns: 1fr 5fr;
`

const CloseBtn = styled.div`
  /* align-self: flex-start; */
`
// const StyledBackdrop = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
// `;

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
    // return console.log(`${key} ${value}`);
  }
)

export const Contact = ({ active, handleActive }) => {
  return (
    <Wrapper>
      <StyledContact active={active} onClick={() => handleActive()}>
        <StyledHeader>
          {/* {active ? <CloseBtn>Cl</CloseBtn> : ''}  */}
          <CloseBtn>Cl</CloseBtn> 
          Contact
        </StyledHeader>
        <ContactDetails />
      </StyledContact>
    </Wrapper>
  )
}
