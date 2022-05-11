import styled from "styled-components";
import {mobile} from "../responsive"
import { useState } from "react";

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
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const InputText = styled.input`
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`; 

const Error = styled.span`
  color: red;
`;

const Publish = () => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);

    const handleChange = (e) => { 
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleClick = (e) => {
        console.log("publier ! ");
        // a faire //
    };

  return (
    <Container>
      <Wrapper>
        <Title>Nouveau Produit</Title>
        <Form>
          <Input type = "file" placeholder="Image" onChange={(e) => setFile(e.target.files[0])} />
          <Input type = "text" placeholder="Nom du produit" onChange={handleChange} />
          <Input type = "text" placeholder="Description" onChange={handleChange} />
          <Input type = "text" placeholder="Prix" onChange={handleChange} />
          <Input type = "text" placeholder="Categorie" onChange={handleCat} />
          <Input type = "text" placeholder="Taille" onChange={handleChange} />
          <Input type = "text" placeholder="Couleur" onChange={handleChange} />
          <Input type = "text" placeholder="Auteur" onChange={handleChange} />
        </Form>
        <Button onClick={handleClick}>Publier</Button>
      </Wrapper>
    </Container>
  );
};

export default Publish; 
