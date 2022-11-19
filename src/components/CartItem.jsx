import React, { useRef } from 'react'
import CartAtom from '../recoil/Atoms/cartAtom'
import {useRecoilState} from 'recoil'
import Products from '../data'
import {FaTrash} from 'react-icons/fa'
function CartItem({Item}) {
    const [cart,setCart] = useRecoilState(CartAtom)
    const selectInput = useRef()
    console.log(Item)
    const modifyElement = (id,Qty) => { 
      // recuperation du produit et de l'index
      const Product = Products.find( product => product.id === id )
      let productToAdd = {
        id : Product.id,
        productName : Product.productName,
        image : Product.imgUrls[0],
        qty : Qty ,
        price : Product.productPrice
      }
      const existItem = cart.find(x => x.id === Product.id)
    if(existItem){
      const newCart =  cart.map( x => x.id === existItem.id ? productToAdd : x)
      setCart(newCart)
    }else{
       const newCart =[...cart,productToAdd]
       setCart(newCart)
    }
  
     }
     const removeFromCart = () => { 
       //retrouver l'index de l'element a partir de son
       // supprimer l'element via son index grace a la fonction splice
       const newCart = cart.filter(x => x.id !== Item.id )
       setCart(newCart)
      }
  return (
    <div className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div className="flex -mx-4 flex-wrap items-center">
                  <div className="w-full md:w-1/3 px-4 mb-3">
                    <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img
                        className="h-full object-contain"
                        src={Item.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-2/3 px-4">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      {Item.productName}
                    </h3>
                    <p className="text-gray-500">Maecenas 0.7 commodo sit</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12 px-4">
                <p className="text-lg text-green-500 font-bold font-heading">
                  ${Item.price}
                </p>
                <span className="text-xs text-gray-500 line-through">
                  $33.69
                </span>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 ">
                <select ref={selectInput}
                value={Item.qty}
                onChange={(e) =>{ modifyElement(Item.id,Number(e.target.value))} }
               className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-green-300 focus:border-green-300 rounded-md"
               name=""
               id=""
             >
             {[...Array(Item.qty).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
             </select>
                  
                </div>
              </div>
              <div className='w-auto md:w-1/6 lg:w-2/12 px-4 text-right flex'>
              <div className="">
                <p className="text-lg text-green-500 font-bold font-heading">
                  ${ (Item.qty * Item.price).toFixed(2) }
                </p>
              </div>
              <div onClick={removeFromCart} className="w-auto  px-4 text-right cursor-pointer">
                <FaTrash size={24}  className='text-black fill-current hover:text-green-500' />
              </div>
              </div>
              
              
            </div>
  )
}

export default CartItem