import {Layout} from "./Components/layout.tsx";
import styled from "styled-components";


export const Box = styled.div`
    background: darkorange;
    color: white;
    margin: 10px 5px 10px 5px;
    border-radius: 5px;
`



function App() {
  return (
      <Layout>
          <Box>
          <h1>Faça login</h1>
          </Box>
          <label htmlFor="email" >Email:</label>
          <input type="email" id="email"/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button>Entrar</button>
      </Layout>
  )


}

export default App
