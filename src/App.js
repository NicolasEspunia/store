
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConatiner from './components/itemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';







function App() {





  return (
    
    <BrowserRouter>
   
      <NavBar/>
    
      <hr/>
     
      <Routes>
      <Route exact path="/" element={<ItemListConatiner/>} />
      <Route path="categoria/:catIdParams" element={<ItemListConatiner/>} />
      <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
      
      </Routes>
      
    
    </BrowserRouter>
  
   
  );
}

export default App;
