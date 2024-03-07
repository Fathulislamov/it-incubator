import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
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

`
