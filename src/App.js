
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConatiner from './components/itemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartProvider from './components/CartContext';
import Carrousel from './components/Carousel/Carousel'

import Cart from './components/Cart/Cart';










function App() {

// useEffect(()=>{
//   setLoading(true);
//   const db = getFirestore();
//   const itemCollection =db.collection("productos");
//   const item = itemCollection.doc(itemId);

//   item.get
//   .then(doc =>{
//     if(!doc.exists) {
//       console.log('');return;
//     }
//     setItems({id:doc.id,...data()})
//   })
//   .catch(error => console.log(error))
//   .finaly(() => setLoading(false))
// },[]);



  return (
 
   <CartProvider>

    <BrowserRouter >
      <NavBar/>
      
     <br/>
    <div className="items">
        <Routes>
     
          <Route exact path="/" element={<ItemListConatiner/>}/>
          <Route path="categoria/:catIdParams" element={<ItemListConatiner/>} />
          <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
    </div>
    </BrowserRouter>
     <Carrousel/>
   </CartProvider>
  
    
   
  );
}

export default App;
