import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  background-color: rgb(117, 28, 124);
  font-family: 'Montserrat', sans-serif;;
  color: #41444b;

  @media (max-width: 800px) {
    margin: 10px;
  }
}
`
