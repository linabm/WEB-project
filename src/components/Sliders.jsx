import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {sliderItems} from "../data" ;
import { useState } from 'react';
import {mobile} from "../responsive"
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    dispay: flex;
    position: relative; 
    overflow: hidden ; 
    ${mobile({display:"none"})}
`;

const Arrow = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff7f7;
    border-radius: 50%;
    dispay: flex;
    align-items: center;
    justify-content: center;
    position: absolute; 
    top: 0;
    bottom: 0; 
    left: ${(props)=> props.direction === "left" && "10px"}; 
    right: ${(props)=> props.direction === "right" && "10px"};
    margin: auto; 
    cursor: pointer;
    opacity: 0.5; 
    z-index: 2; 
`;

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%; 
    margin-left: 25px;
    flex:1;
`;
const Image = styled.img`
    height: 85%; 
`;


const InfoContainer = styled.div`
    flex:1;
    padding: 70px; 
    width:400px;
    height: 400px
`;
const Title = styled.h1`
   font-size: 40px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding:10px; 
    font-size: 20px;
    backgroung-color: transparent;
    cursor: pointer;
`;

const Sliders = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src= {item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Link to="/publish">
                    <Button>Vendre maintenant</Button>
                    </Link>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}> 
            <ArrowRightIcon/>
        </Arrow>
    </Container>
  )
}

export default Sliders