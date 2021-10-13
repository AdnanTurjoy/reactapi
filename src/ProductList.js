import { useState, useEffect } from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'
const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await fetch('http://127.0.0.1:8000/api/list');
        const items = await response.json();
        setData(items);
  }, []);
  console.log(data);
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
              </tr>
              )
          }
        </tbody>
      </Table>

    </div>
  );
};

export default ProductList;
