import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}

body {
  background: #FFFFFF;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

body,
input,
button,
textarea {
  color: #292929;
  border: 0;
  box-shadow: 0 0 0 0;
  outline: 0;
}
`;
