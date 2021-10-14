import { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import axios from "axios";
import {Table,Button} from 'react-bootstrap'
const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect( async () => {
    getData();
  }, []);
  const handleDelete = async(id)=>{
    console.log(id);
    await axios.delete('http://127.0.0.1:8000/api/delete/'+id);
    getData();
  }
  const getData = async ()=>{
    const response = await fetch('http://127.0.0.1:8000/api/list');
    const items = await response.json();
    setData(items);
  }
  //console.log(data);
  return (
    <div>
      <h1>Product List</h1>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th> Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Opearation</th>
          </tr>
        </thead>
        <tbody>
          {
              data.map((item)=>
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img style={{width: "120px",
    height: "120px"}} src={"http://127.0.0.1:8000/images/"+item.file_path}/></td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><Button onClick={()=>handleDelete(item.id)} size="sm" variant="danger">Delete</Button>
                  <Button ><Link to={"/singleproduct/"+item.id}>View</Link></Button>
                  
                 </td>
                
              </tr>
              )
          }
        </tbody>
      </Table>

    </div>
  );
};

export default ProductList;
