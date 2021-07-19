import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-size: 60%;
  --color-background: #FFFFFF;
  --color-text-base: #292929;
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
  background: var(--color-background);
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  /* overflow: hidden; */
  overflow-x: hidden;
}

body,
input,
button,
textarea {
  color: var(--color-text-base);
  border: 0;
  box-shadow: 0 0 0 0;
  outline: 0;
}
`;
