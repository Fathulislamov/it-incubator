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
		display: flex;
		justify-content: center;
	@media screen and (max-width: 1368px){
		padding-left: 30px;
	}
	@media ${theme.media.tablet}{
		padding: 0;
	}
	
		@media screen and (max-width: 360px){
		padding: 0;
	}
}

li{
	list-style-type:  none;		
}

a {
	text-decoration: none;
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
	font-size: 32px;
}
section {
		margin-top: 112px;
	}
	  
`
