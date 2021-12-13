
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import'./item.css'





export function Item({item}) {

//el componente Item es de presentación, su responsabilidad va a ser la de presentar la información en pantalla. 


    console.log('este es el prop de item' + item)
    console.log(item)


   

    return (

        <div>
            <li key={item.id}  className="card row">
                
                    <div className="card-head">
                        <h1 className="product-detail">{item.title}</h1>
                        <Link to={`/item/${item.id}`}>
                        <img src={item.pictureURL} alt={item.title} className="picture" />
                        </Link>
                        <p className="description">{item.description}</p>
                        <p className="product-price"><b>{item.price}$</b></p>
                        <br />
                    </div>
                    <div className="boton">

                        <ItemCount stock={item.stock} id={item.id}/>
                    </div>
                   
            </li>
        </div>
    
            )
    
}