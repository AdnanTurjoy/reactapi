import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>E-commerce</h1>
      <Route path='/login'>
         <Login/>
      </Route>
      <Route path='/addProduct'>
         <AddProduct/>
      </Route>
      <Route path='/updateProduct'>
         <UpdateProduct/>
      </Route>
      <Route path='/Register'>
         <Register/>
      </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
