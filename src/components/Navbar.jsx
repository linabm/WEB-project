import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'; 

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

// center side 
const Center = styled.div`
    margin-left:545px;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`;

// right side 
const Right = styled.div`
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
                <Center>
                    <Logo>INSAPPES.</Logo>
                </Center>
                <Right>
                    <Link to="/publish">
                    <MenuItem>Publish</MenuItem>
                    </Link>
                    <Link to="/whishlist">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
  );
};

export default Navbar