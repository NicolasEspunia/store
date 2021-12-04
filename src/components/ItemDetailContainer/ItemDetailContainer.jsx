import React from 'react';
import { useEffect, useState } from 'react';
import { ListaProductos } from '../ListaProductos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () =>{

    //Como vamos a volver a pedir a la API (o en este caso a mi lista de productos harcodeada) un producto, tenemos que persistir ese producto en el estado. Piensen que cada vez que hacemos click en el contador, se renderiza de vuelta el componente y si no persistimos el estado, se pierde.
    const [productoIndividual, setProductoIndividual]= useState({}); //recuerden que persistimos un producto, un objeto producto, no un array en este caso.
    const [loading, setLoading] = useState(true);

    const { itemIdParams } = useParams(); //tomo el params de la url y lo guardo en una variable id.
   
    //La promesa la pueden hacer en un helper... 
      useEffect(() => {
          const promesaIndividual = new Promise ((res, rej)=> {
              setTimeout(()=> {
                  res(ListaProductos.find(producto => producto.id == itemIdParams)) //aca le paso el id que viene de la url y lo comparo pero no de modo estricto (el id de params es un string y el id de la lista es un numero)
                  //podría ser la misma promesa que usamos en ItemListContainer? sería óptimo?
              }, 2000)
          })
          promesaIndividual.then((prodEncontrado)=>{
              console.log('OK');
              setProductoIndividual(prodEncontrado) //prodEncontrado es un objeto! recuerden
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])
     //el segundo parámetro es la dependencia de la variable id, porque si cambia el id, se ejecuta el useEffect de vuelta para pedirme nuevamente el producto con ese otro id.

    console.log(productoIndividual);
    
//acá el único esfuerzo del container detail es pedir el producto que le pasamos por params en la url

//seccion ternario del loading: si loading es true, es porque todavía no ejecutamos el finally, entonces la promesa esta en proceso, por lo que mostramos el loading. Si es false, ya se ejecutó el finally, por lo que ya tenemos el objeto producto, y se lo mandamos a ItemDetail. Así evitamos pasar un undefined.

    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h2>Cargando detalles..</h2> 
                : 
            <ItemDetail item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemDetailContainer