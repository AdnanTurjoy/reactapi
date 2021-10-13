import { useState, useEffect } from "react";
import axios from "axios";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  async function addProduct() {
    console.warn(name, description, price, file);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("description", description);
    formData.append("price", price);
    
  

    axios.post('http://localhost:8000/api/addproduct',formData).then((res) => console.log(res.data))
    .catch((err) => console.log(err));
   
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <br />
      <input
        className="form-control"
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="text"
        className="form-control"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="price"
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />

      <input
        type="file"
        className="form-control"
        name={file}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button type="submit" onClick={addProduct} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
};

export default AddProduct;
