import { useState } from 'react'
import {useCartContext} from '../CartContext'

import firebase from 'firebase'
import 'firebase/firestore'
import  {getFirestore } from '../firebase/firebase'


function Cart() {
    const [idOrder, setIdOrder] = useState('')

    const {cartList, varciarCarrtio, precioTotal} = useCartContext()

    const generarOrden = (e)=> {
        e.preventDefault()
        
        const orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());    

        orden.buyer = {nombre: 'Fede', email:'f@gmail.com', tel: '21346546'}
        orden.total =  precioTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.id
            const precio = cartItem.id

            return {id, nombre, precio}   
        })

        const db = getFirestore() //ESto agrega uno nuevo 
        db.collection('orders').add(orden)
        .then(resp => setIdOrder(resp.id))

        // db.collection('items').doc('o0SRMKuaZ1nik6jwLDQ3').update({ // actualiza
        //     stock: 99
        // })
        // .then(resp => console.log('actualizado'))




        //Actualiza todos los items que estan en el listado de Cart del CartContext
    
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.id)//[id1, id2....]
        )
    
        const batch = db.batch();
        
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()

        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('se actualizo')
            })
        })
    
        
          console.log('verificar cupon')
          console.log(orden)


    }



    return (
        <div>
        <h1>Cart</h1>
        <section>
            {idOrder!==''&& <label>El id de su orden es : {idOrder}</label>}
        </section>
        {cartList.map(prod => <li key={prod.id}>{prod.nombre} { prod.cantidad}</li>)}
        {`Precio total: ${precioTotal()}`}
        <button onClick={ ()=> varciarCarrtio()} >borrar el carrito</button>
        <form 
            onSubmit={generarOrden} 
            // onChange={handleChange} 
        >
            {/* <input type='text' name='name' placeholder='name' value={formData.name}/>
            <input type='text' name='phone'placeholder='tel' value={formData.phone}/>
            <input type='email' name='email'placeholder='email' value={formData.email}/> */}
            <button>Enviar Orden</button>
        </form>

    </div>

    )
}

export default Cart
