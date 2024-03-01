import './App.css';
import styled from 'styled-components';
import img from './assets/Rectangle.png'


function App() {
  return (
    <div className="App">
      <Card>
        <Image src={img} />
        <WrapContent>
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
          <Button buttonBackground = {"rgb(78, 113, 254)"} buttonColor = {"rgb(255, 255, 255)"}>See more</Button>
          <Button buttonBackground = {"rgb(255, 255, 255)"} buttonColor = { "rgb(78, 113, 254)"}>Save</Button>
        </WrapContent>
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
	display: flex;
	margin: 30vh auto;
	flex-direction: column;
	width: 300px;
	height: 350px;
	border-radius: 15px;
	box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
	background: rgb(255, 255, 255);
	padding-top: 10px;
`;

const WrapContent = styled.div`
	margin: 20px;
`
const Image = styled.img`
	margin: 0 auto;
	width: 280px;
	height: 170px;


`
const Title = styled.h1`
	color: rgb(0, 0, 0);
	font-family: Inter;
	font-size: 16px;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 0%;
	text-align: left;

`
const Text = styled.p`
	color: rgb(171, 179, 186);
	font-family: Inter;
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0%;
	text-align: left;	
	margin-top: 20px;
`
type PropsButtonType = {
	buttonBackground: string
	buttonColor: string
}
const Button = styled.button<PropsButtonType>`
	width: 86px;
	height: 30px;
	box-sizing: border-box;
	border: 2px solid rgb(78, 113, 254);
	border-radius: 5px;
	color: ${props => props.buttonColor};
	background-color: ${props => props.buttonBackground};
	font-family: Inter;
	font-size: 10px;
	font-weight: 700;
	line-height: 20px;
	letter-spacing: 0%;
	margin-top: 2lpx;
	:last-child{
		margin-left: 12px;
	}
	
`
