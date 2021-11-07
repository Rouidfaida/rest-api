import './App.css';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';
import {Routes,Route} from 'react-router-dom';

// import { BrowserRouter as Router,  Route,Switch, Link } from "react-router-dom";
import Info from './Components/Info';
import ProductList from './Components/ProductList';
import { addProduct } from './redux/actionuser';
import ADDProduct from './Components/ADDProduct';
// import { Switch } from 'react-router';
function App() {
  return (
    <div className="App">
      
      <Add/>
      <h1>List of users</h1>
 <UserList/>

 <h1>List of products</h1>
 <ADDProduct/>

    <ProductList/>        

  
     </div>
  );
}

export default App;
