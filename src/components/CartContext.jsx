import { useState, createContext, useContext } from 'react'

const CartContext= createContext([])
 
export const  useCartContext =()=> useContext(CartContext)


function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const agregarProducto =(item)=>{
        const index = cartList.findIndex(i => i.id === item.id)//pos    -1
  
        if (index > -1) {
          const oldQy = cartList[index].cantidad

          cartList.splice(index, 1)
          setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
        } else {
          setCartList([...cartList, {...item, cantidad: item.cantidad}])
        }
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.price)), 0) 
    }
    const cantidadItem = () =>{
        return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }

    const varciarCarrtio=()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            agregarProducto,
            varciarCarrtio,
            precioTotal,
            cantidadItem

        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
