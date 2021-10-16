import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link ,useHistory } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push('/register');

  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
              
                <Nav.Link href="/product">Product List</Nav.Link>
                <Nav.Link href="/add">Add Product</Nav.Link>
                <Nav.Link href="/update">Update</Nav.Link>
                <Nav.Link href="/search">Search Product</Nav.Link>

              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
        <Nav>
          <NavDropdown title="user.name">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
