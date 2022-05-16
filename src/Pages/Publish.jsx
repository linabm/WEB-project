import styled from "styled-components";
import {mobile} from "../responsive"
import { useState } from "react";
import create from "../redux/postApi";
import FormData from 'form-data';

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
    const [name, setName] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const [pseudo, setPseudo] = useState({});
    const [description, setDescription] = useState({});
    const [price, setPrice] = useState({});
    const [size, setSize] = useState({});

    const data= new FormData();

   /* const [data,setData] =useState(new FormData)
  
    const handleData=()=>{
      setData({
        data: data.set('file',file)
      })
    }*/

   /* const handleChangeFile=({currentTarget})=>{
      const{file, value}= currentTarget;

      setFile({
        [file]: value
      })
      data.set('file',file[0])
    }
    */


    /*const handleChange = (e) => { 
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };*/

    const handleChangeName= ({currentTarget})=>{
      const{name, value}= currentTarget;

   
      setName({
        [name]: value
      })
      
    }
    const handleChangePseudo= ({currentTarget})=>{
      const{pseudo, value}= currentTarget;

   
      setPseudo({
        [pseudo]: value
      })
      
    }
    const handleChangeDescription= ({currentTarget})=>{
      const{description, value}= currentTarget;

   
      setDescription({
        [description]: value
      })
      
    }

    const handleChangePrice= ({currentTarget})=>{
      const{price, value}= currentTarget;

   
      setPrice({
        [price]: value
      })
      
    }
    const handleChangeSize= ({currentTarget})=>{
      const{size, value}= currentTarget;

   
      setSize({
        [size]: value
      })
      
    }

    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleClick = (e) => {
      console.log("hey")
      e.preventDefault()
      console.log(name)
      const data= create(name,pseudo,size,description,price)
    };

    /*const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(e)
      const data= create(file)

    }*/

  return (
    <Container>
      <Wrapper>
        <Title>Nouveau Produit</Title>
        <Form >
          <Input type = "file" placeholder="Image" onChange={(e) => setFile(e.target.files[0])} />
          <Input type = "text" placeholder="Nom du produit" onChange={handleChangeName} />
          <Input type = "text" placeholder="Description" onChange={handleChangeDescription} />
          <Input type = "text" placeholder="Prix" onChange={handleChangePrice} />
          <Input type = "text" placeholder="Categorie" onChange={handleCat} />
          <Input type = "text" placeholder="Taille" onChange={handleChangeSize} />
          <Input type = "text" placeholder="Auteur" onChange={handleChangePseudo}/>
        </Form>
        <Button  onClick={handleClick}> Publier</Button>
      </Wrapper>
    </Container>
  );
};

export default Publish; 
