import {useState} from "react";


export default function ItemCount(props) {

    //para actualizar y controlar el contador de productos    
    
    const [Count, setCount] = useState(0);

    //defino las funciones que voy a usar para el contador y para los botones
    //sumarContador: se me va a activar solo si la cantidad que quiere agregar el usuario no supera el stock disponible (eso es info que tengo en ListaProductos harcodeada). Si la cantidad no supera el stock, seteo el contador con un punto más. Si la cantidad es igual o mayor al stock, muestro un alerta en pantalla.
    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('La Cantidad supera el stock disponible');
        }
    }

    //restarContador: se me va a activar solo si tengo más de 1 punto en el contador. Si tengo 1 punto o menos, muestro un alerta en pantalla. Si tengo más de 1 punto, resto un punto.
    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        } else {
            alert('¿Eliminar item del carrito?'); 
            setCount(0);
                }
}
    
    const agregarCarrito = () => {
           //todavía no le podemos dar funcionalidad a agregarCarrito porque no tenemos un componente carrito. Pero es la función que se va a ejecutar en el onClick del botón de agregar al carrito.
        }
        
        //voy a devolver un componente pelado sin estilo
    
        return(
            <div>

                <button onClick={restarContador}>-</button>

                {Count}
                
                <button onClick={sumarContador}>+</button>

                <button onClick={agregarCarrito}>Agregar al carrito</button>

            </div>
        )
    }