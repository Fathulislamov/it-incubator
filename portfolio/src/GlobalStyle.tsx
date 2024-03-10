import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background: ${theme.color.background};
	color: ${theme.color.font};
	font-family: 'Fira Code' , monospace, sans-serif;
	font-display: swap;
	
}

li{
	list-style-type:  none;		
}

button {
	padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
}
h2 {
	font-size: 32px;
	font-weight: 500;
	line-height: 42px;
}
	  
`
