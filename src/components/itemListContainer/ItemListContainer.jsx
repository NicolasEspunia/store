import React from 'react';
import {ItemList} from '../item/ItemList';
import { useEffect, useState } from 'react';
import { ListaProductos } from '../item/ListaProductos';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';






const ItemListContainer = () =>{

    //si vamos a hacer un pedido de productos, que nos va a traer un array, tenemos que persistir ese array en el estado porque sino cada vez que renderizamos el componente, Me va a pisar el array y voy a tener que estar llamando a la API nuevamente (eso es super costoso)
    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
   
    const { catIdParams } = useParams(); //tomo el params de la url y lo guardo en una variable.
    //La promesa la pueden hacer en un helper... yo la hago acá para que se note bien bien el patrón de que el container hace el pedido. 
      useEffect(() => {
          const promesa = new Promise ((res, rej)=> {
              setLoading(true);
              setTimeout(()=> {
                  res(ListaProductos)
              }, 2000)
          })
          if(catIdParams){
          promesa.then((ListaProductos)=>{
              console.log('OK el filtrado');
              setProductos(ListaProductos.filter(producto => producto.categoria === catIdParams)) //aca lo comparo de modo estricto porque la categoria de mi lista es String y el params también es String
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        } else {
            promesa.then((ListaProductos)=>{
                console.log('OK sin filtrar');
                setProductos(ListaProductos)
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            })
        }}, [catIdParams])
     //el segundo parámetro es la dependencia de la variable id, porque si cambia el id, se ejecuta el useEffect de vuelta para pedirme nuevamente la lista de productos de esa categoria.
    console.log(productos)
    

//ese estado que seteamos en el useState, es el que va a ser la props que el container le va a pasar a ItemList, que será el responsable de mapearlo. Recuerden: darle el mínimo trabajo a cada componente

//seccion ternario del loading: si loading es true, es porque todavía no ejecutamos el finally, entonces la promesa esta en proceso, por lo que mostramos el loading. Si es false, ya se ejecutó el finally, por lo que ya tenemos los datos, y se lo mandamos a ItemList. Sino ItemList va a recibir un undefined (array vacío)

    return(
        <>
            {loading 
                ? 
                <h1>Cargando..<Spinner animation="border" /></h1> 
                : 
               
                
              
                <ItemList lista={productos}/> }
    
    
        </>
    )
    };

export default ItemListContainer