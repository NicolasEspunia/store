
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import {useCartContext} from '../CartContext'

const ItemDetail =  ( {item} ) => {
    const [count, setCount] = useState(1)

    const { cartList, agregarProducto } = useCartContext()

    function onAdd(cant) {
        setCount(cant)
        agregarProducto( { ...item, cantidad: cant} )
    }
    console.log(cartList)


    return (
        
         <div>
            <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={()=>onAdd(3) }>Agregar Carrito</button>
                    <ItemCount onAdd={onAdd} count ={count}/>   

        </div>
                
    )
}
export default ItemDetail