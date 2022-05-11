import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import {BrowserRouter as Router, Link} from 'react-router-dom'; 


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

// Left part 
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-size: 45px;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

// Center part 
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor:pointer;
`;

// Right part 
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
return (
    <Container>
    <Left>
        <Logo>INSAPPES.</Logo>
        <Desc>
        Il s'agit d'une application web destinée aux étudiants de l'INSA 
        afin de premettre une revente plus facile au sein du campus et favoriser 
        des achats locaux. 
        </Desc>
        <SocialContainer>
        <SocialIcon color="3B5999">
            <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
            <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Twitter />
        </SocialIcon>
        <SocialIcon color="E60023">
            <Pinterest />
        </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Liens utiles</Title>
        <List>
            <Link to='/'>
        <ListItem>Home</ListItem>
            </Link>
        <ListItem>Vêtements</ListItem>
        <ListItem>Decoration</ListItem>
        <ListItem>Fourniture / Objets</ListItem>
        <ListItem>Mon Compte</ListItem>
        <ListItem>Mes Achats</ListItem>
        <ListItem>Terms and Contracts</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
        <Room style={{marginRight:"10px"}}/> 20 Av. Albert Einstein, 69100 Villeurbanne
        </ContactItem>
        <ContactItem>
        <Phone style={{marginRight:"10px"}}/> 06 00 00 00 00
        </ContactItem>
        <ContactItem>
        <MailOutline style={{marginRight:"10px"}} /> insappes@insa-lyon.fr
        </ContactItem>
    </Right>
    </Container>
    );
};

export default Footer;