import { useState, useEffect} from "react";
import {Button} from "react-bootstrap"
import { Link ,useParams } from "react-router-dom";
const UpdateProduct = () => {
    const [data,setData] =useState([]);
    let { id } = useParams();
    console.log(id);
    useEffect( async () => {
        getsingleData();
      }, []);
      const getsingleData = async ()=>{
        const response = await fetch('http://127.0.0.1:8000/api/product/'+id);
        const items = await response.json();
        setData(items);
      }
      const updateProduct =()=>{
          
      }
    return ( <div className="col-sm-6 offset-sm-3">
        <h1>Update Product</h1>
        <label>Name</label>
        <input className="form-control" type="text" value={data.name}/> <br/>
        <label>Description</label>
        <input className="form-control" type="text" value={data.description}/><br/>
        <label>price</label>
        <input className="form-control" type="text" value={data.price}/><br/>
        <img style={{width: "120px",
    height: "120px"}} src={"http://127.0.0.1:8000/images/"+data.file_path}/><br/>
    <Button onClick={handleUpdate} variant="success">Update</Button>
    </div> );
}
 
export default UpdateProduct;