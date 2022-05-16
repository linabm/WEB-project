import styled from "styled-components";
import {mobile} from "../responsive"
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
    const navigate = useNavigate();
    const [Titre, setTitre] = useState("");
    const [Desc, setDesc] = useState("");
    const [Img, setImg] = useState("");
    const [Categories, setCategories] = useState("");
    const [Size, setSize] = useState("");
    const [Color, setColor] = useState("");
    const [Price, setPrice] = useState(0);
    const [Author, setAuthor] = useState("");



    const handleClick = (e) => {
      e.preventDefault(); //rafraichit pas la page
      const produit = {
        title: Titre,
        desc: Desc,
        img: Img,
        categories: Categories, 
        size: Size,
        color: Color,
        price: Price,
        author: Author,
      }
      publicRequest.post("/products", produit)
      .then(response => console.log(response.data))
      
      setTitre('');
      setDesc('');
      setImg('');
      setCategories('');
      setSize('');
      setColor('');
      setPrice(0);
      setAuthor('');
  
      alert("Bien publié ! ");
      navigate('/');
    };

  return (
    <Container>
      <Wrapper>
        <Title>Nouveau Produit</Title>
        <Form>
          {/* <Input type = "file" placeholder="Image" onChange={(e) => setFile(e.target.files[0])} /> */}
          <Input type = "string" placeholder="lien image" onChange={(e) => setImg(e.target.value)} />
          <Input type = "text" placeholder="Nom du produit" onChange={(e) => setTitre(e.target.value)}/>
          <Input type = "text" placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
          <Input type = "text" placeholder="Prix" onChange={(e) => setPrice(e.target.value)} />
          <Input type = "text" placeholder="Categorie" onChange={(e) => setCategories(e.target.value)} />
          <Input type = "text" placeholder="Taille" onChange={(e) => setSize(e.target.value)} />
          <Input type = "text" placeholder="Couleur" onChange={(e) => setColor(e.target.value)} />
          <Input type = "text" placeholder="Auteur" onChange={(e) => setAuthor(e.target.value)} />
        </Form>
        <Button onClick={handleClick}>Publier</Button>
      </Wrapper>
    </Container>
  );
};

export default Publish; 
