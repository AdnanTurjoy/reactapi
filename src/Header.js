import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
const Header = () => {
    return ( 
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto nav_bar_wrapper">
      <Link to='/addProduct'>Add Product</Link>
      <Link to='/updateProduct'>Update Product</Link>
      <Link to='/login'>Login</Link>     
       <Link to='/register'>Register</Link>




    </Nav>
    </Container>
  </Navbar>
        </div>
     );
}
 
export default Header;