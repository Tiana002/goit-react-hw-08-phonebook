import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  
@media (max-width: 475px) {
    font-size: 12px;
}

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-color: #FFFFFF ;
  color: #ffffff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

input {
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  outline: transparent;
  border: transparent;
}

button {
  cursor: pointer;
}

span {
  font-size: 12px;
  color: #403d3d;
}

`;

