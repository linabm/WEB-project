import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault(); //rafraichit pas la page
    const registered = {
      username: Username,
      email: Email,
      password: Password
    }
    publicRequest.post("/auth/register", registered)
    .then(response => console.log(response.data))
    
    setUsername('');
    setPassword('');
    setEmail('');

    alert("Bien enregistré ! ");
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Title>Créer un compte</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="mot de passe" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <Agreement>
          En créant un compte, je consens au traitement de mes 
          données personnelles conformément à la <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;