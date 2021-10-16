import {useState, useEffect} from 'react';
import {Table,Button} from 'react-bootstrap';
import { Link ,useParams } from "react-router-dom";
const SingleProduct = () => {
    let { id } = useParams();
    console.log(id)
    const [singleData, setSingleData] = useState({});
    useEffect( async () => {
        getsingleData();
      }, []);
      const getsingleData = async ()=>{
        const response = await fetch('http://127.0.0.1:8000/api/product/'+id);
        const items = await response.json();
        setSingleData(items);
      }
    return ( 
      <div>
         <h1>Single Product</h1>
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
              
                <tr key={singleData.id}>
                <td>{singleData.id}</td>
                <td>{singleData.name}</td>
                <td><img style={{width: "120px",
    height: "120px"}} src={"http://127.0.0.1:8000/images/"+singleData.file_path}/></td>
                <td>{singleData.description}</td>
                <td>{singleData.price}</td>
              
              </tr>
              
          }
        </tbody>
      </Table>

      <Link to="/product"><Button variant="info" className="btn btn-sm m-2">Back</Button></Link>
      </div>

     );
}
 
export default SingleProduct;


