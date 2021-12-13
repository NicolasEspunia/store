import React from 'react';

import {Item} from '../item/Item';



export function ItemList(props) {

    //le pueden hacer destructuring de props.lista para que no tenga que pasarle todo el objeto, pero acá no lo hago para que sepan que viene de una props del padre.
   
    console.log(props.lista)

    //el ItemList solo mastica la información que le trae el padre (container) y la manda a Item para que la presente en pantalla.

    return (
        <>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </>
    )
}