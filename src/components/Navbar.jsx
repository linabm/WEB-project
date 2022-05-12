import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Link} from 'react-router-dom'; 

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px"})}
`;


// Left side
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cusrsor: pointer;
    ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`;

// center side 
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`;

// right side 
const Right = styled.div`
    flex:1;
    display: flex;
    aligh-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent:"center"})}
`;
const MenuItem = styled.div`
    font-size:17px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>FR</Language>
                    <SearchContainer>
                        <Input placeholder="Rechercher"/>
                        <SearchIcon style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>INSAPPES.</Logo>
                </Center>
                <Right>
                    <Link to="/register">
                    <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to="/login">
                    <MenuItem>Sign in</MenuItem>
                    </Link>
                    <Link to="/publish">
                    <MenuItem>PUBLISH</MenuItem>
                    </Link>
                    <Link to="/whishlist">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <FavoriteBorderOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
  );
};

export default Navbar
