import styled from "styled-components";
import { theme } from "../theme";

export const StyledFooter = styled.div`
	border-top: 1px solid ${theme.color.default}; 
	margin-top: 143px;
`;
export const WrapFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;
	width: 100%;
	padding: 33px 0;
	@media ${theme.media.mobile}{
		gap: 30px;
		flex-direction: column;
	}

`;
export const WrapSummary = styled.div`
	display: flex;
	max-width: 350px;
	flex-wrap: wrap;

`;
export const Domain = styled.p`
	margin-left: 24px;

`;
export const Summary = styled.p`
	margin-top: 15px;
	margin-left: -3px;
`;
export const WrapMedia = styled.div`
	max-width: 115px;
	display: flex;
	flex-direction: column;
	align-items: start;

`;
export const Media = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
`;
export const SocialIcon = styled.div`
	display: flex;
	margin-top: 10px;
 & > svg {
		width: 33px;
		height: 33px;
	}
	svg + svg {
		margin-left: 8px;
	}
`;
export const Copyright = styled.span`
	margin: 14px 0 30px;;
	display: flex;
	justify-content: center;
`;

