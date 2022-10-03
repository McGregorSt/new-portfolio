import styled from 'styled-components'

export const GridTile = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  /* flex-direction: column;
  justify-content: space-around; */
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 15px;
  padding: 30px 0 60px 0;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.35),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 10px 20px, rgba(0, 0, 0, 0.13) 0px 6px 6px;
  color: rgba(0, 0, 0, 0.99);
  font-size: 26px;
`
