import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams,useHistory  } from "react-router-dom";
const UpdateProduct = () => {
    let history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(async () => {
    getsingleData();
  }, []);
  const getsingleData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/product/" + id);
    const items = await response.json();
    setData(items);
    setName(items.name);
    setDescription(items.description);
    setPrice(items.price);
    setFile(items.file);
  };
  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("description", description);
    formData.append("price", price);

    await fetch(
      "http://localhost:8000/api/update/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    
    history.push('/product')
  };
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Update Product</h1>
      <label>Name</label>
      <input
        className="form-control"
        type="text"
        defaultValue={data.name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Description</label>
      <input
        className="form-control"
        type="text"
        defaultValue={data.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label>price</label>
      <input
        className="form-control"
        type="text"
        defaultValue={data.price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <img
        style={{ width: "120px", height: "120px" }}
        src={"http://127.0.0.1:8000/images/" + data.file_path}
      />
      <br />
      <input
        type="file"
        className="form-control"
        name={file}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <Button onClick={() => handleUpdate(data.id)} variant="success">
        Update
      </Button>
     
    </div>
  );
};

export default UpdateProduct;
