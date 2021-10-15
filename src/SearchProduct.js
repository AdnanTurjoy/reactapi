
import { useState, useEffect } from "react";
import {Table,Button} from 'react-bootstrap'
const SearchProduct = () => {
    const [data,setData]=useState([]);

    const handleSearch = async (key)=>{
        //
        const response = await fetch('http://127.0.0.1:8000/api/search/'+key);
        const items = await response.json();
        setData(items);
      }
      console.log(data);
    return ( 
      <div className="col-sm-6 offset-sm-3">
      <h1> Search Product </h1>
           <br/>
           <input className="form-control" type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search Product"/>
            {
            data.length > 0 ?
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
      :null
}
      </div>


     );
}
 
export default SearchProduct;