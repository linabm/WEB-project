import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import "publish.css";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState(0);
  const [seller, setSeller] = useState("");

  const formData = new FormData();
  formData.append("picture", file);
  formData.append("name", name);
  formData.append("title", title);
  formData.append("Category", category);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("price", price);
  formData.append("seller", seller);
  

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://vinted-express.herokuapp.com/offer/publish",
        formData,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      } else {
        alert("Something happened, try again !");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return token ? (
    <div className="publish">
      <div className="publish-container">
        <h2>Vends ton article</h2>
        <form className="publish-form" onSubmit={handleSubmit}>
          <div className="input-file-div-container">
            <div className="input-file-div">
              <label htmlFor="file">+</label>{" "}
              <label htmlFor="file">Ajouter une image</label>
              <input
                type="file"
                id="file"
                className="input-file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                }}
              />
            </div>
          </div>

          <div className="input-file-div-container-c">
            <h3>Nom</h3>
            <input
              type="text"
              placeholder="ex : Chemise "
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Titre</h3>
            <input
              type="text"
              placeholder="ex : Chemise blanche"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Category</h3>
            <input
              type="text"
              placeholder="ex : Vetement "
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-b">
            <h3>D??cris ton article</h3>
            <textarea
              style={{ width: "40%" }}
              type="text"
              rows="5"
              placeholder="ex : Tr??s belle chemise, port??e assez souvent mais qui reste dans un tr??s bon ??tat..."
              className="textarea"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Marque</h3>
            <input
              type="text"
              placeholder="ex : Zara"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Taille</h3>
            <input
              type="text"
              placeholder="ex : 36/S"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Couleur</h3>
            <input
              type="text"
              placeholder="ex : Blanche"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Condition</h3>
            <input
              type="text"
              placeholder="ex: Tr??s bon ??tat"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
         
          
          <div className="input-file-div-container-c">
            <h3>Prix</h3>
            <input
              type="text"
              placeholder="0.00 ???"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="input-file-div-container-c">
            <h3>Vendeur</h3>
            <input
              type="text"
              placeholder="0.00 ???"
              value={seller}
              onChange={(event) => {
                setSeller(event.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <button type="submit">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};

export default Publish;
