
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import'./item.css'





export function Item({item}) {

//el componente Item es de presentación, su responsabilidad va a ser la de presentar la información en pantalla. 
//RECUERDEN: ItemListContainer solo tiene la responsabilidad de la promesa o fetch a una API, la info que recolecta se la pasa a ItemList, que solo tiene la responsabilidad de mapear ese Array de productos y pasarle cada objeto producto al componente que lo va a mostrar en pantalla (Item).

    console.log('este es el prop de item' + item)
    console.log(item)


    // function Item({id,pictureURL,price,categoria,title})

    //     const[carrito,setCarrito]=useContext(CartContex);

    // function agregarCarrito(){
    //     const producto={
    //         id:id,
    //         pictureURL:pictureURL,
    //         price:price,
    //         categoria:categoria,
    //         title:title
    //     }
    //     const temporal =carrito;
    //     temporal.push(producto);
    //     setCarrito(temporal);
    //     console.log(carrito);
    // }

    return (
            <li key={item.id} className="card">
                
                    <div>
                    <div className="card-head">
                        <h1 className="product-detail">{item.title}</h1>
                        <Link to={`/item/${item.id}`}>
                        <img src={item.pictureURL} alt={item.title} className="picture" />
                        </Link>
                        <p className="description">{item.description}</p>
                        <p className="product-price"><b>{item.price}</b></p>
                        <br />
                    </div>
                    <div className="boton">

                        <ItemCount stock={item.stock} id={item.id}/>
                    </div>
                   
                    </div>
               
            </li>
            )
    
}