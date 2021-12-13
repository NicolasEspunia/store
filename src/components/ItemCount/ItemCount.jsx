import { useState } from 'react'
// import { useCartContext } from '../../../context/CartContext'

function ItemCount({stock = 1, onAdd}) {

    console.log("ItemCount")
   
    
    const [count, setCount] = useState(0)


    function sumarContador() {

        console.log("Sumar")
        if (count < stock) {
            setCount(count + 1)  
        }
        // props.onAdd(count)
        console.log(count)
        
    }

    function restarContador() {

        if (count > 1) {
            setCount(count - 1)
        }
    }

    function handleClik() {
        onAdd(count)
    }

    
  
        
        //voy a devolver un componente pelado sin estilo
    
        return(
            <div>

                <button onClick={restarContador}>-</button>

                {count}
                
                <button onClick={sumarContador}>+</button>

                <button onClick={handleClik}>Agregar al carrito</button>

            </div>
        )
    }
    export default ItemCount