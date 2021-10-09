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
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>E-commerce</h1>
      <Route path='/login'>
         <Login/>
      </Route>
      <Route path='/add'>
         <Protected cmp={AddProduct}/>
      </Route>
      <Route path='/updateProduct'>
         <Protected cmp={UpdateProduct}/>
      </Route>
      <Route path='/Register'>
         <Register/>
      </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
