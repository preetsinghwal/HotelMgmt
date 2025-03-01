import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30pxl;
  font-weight: 700l; 
`;

function App() {

  return (
    <>
      <GlobalStyles />|
      <div>
        <H1>The wild Oasis</H1>
      </div>
    </>
  )
}

export default App
