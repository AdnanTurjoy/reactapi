
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
import ProductList from './ProductList';
import SingleProduct from './SingleProduct';
import SearchProduct from './SearchProduct';


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
         <AddProduct/>
      </Route>
      <Route path='/updateProduct'>
         <UpdateProduct/>
      </Route>
      <Route path='/Register'>
         <Register/>
      </Route>
      <Route path='/singleproduct/:id' children={<SingleProduct/>}>
         
      </Route>
      <Route path='/update/:id' children={<UpdateProduct/>}>
      <UpdateProduct/>
      </Route>
      <Route path='/search' children={<SearchProduct/>}>
        <SearchProduct/>
      </Route>
      <Route path='/product'>
        <ProductList/>
      </Route>

      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
