import React from 'react'
import DroneImage from '../Assets/Images/drones.png'
import {BiLeftArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {useRecoilValue } from 'recoil'
import CartAtom from '../recoil/Atoms/cartAtom'
import CartItem from '../components/CartItem'
function CartScreen() {
  const cartItems = useRecoilValue(CartAtom)
  return (
<section className="py-20 bg-gray-100 overflow-hidden">
  <div className=" mx-auto px-4">
    <div className="p-8  bg-white">
        <div className='flex gap-x-2 '>  <Link  to="/products"
       className='bg-green-700 shadow-md cursor-pointer  hover:bg-green-800 ml-8 w-16 h-16 rounded-lg flex items-center justify-center '>
<BiLeftArrowAlt  size={58} color='white'  className='text-white fill-current font-bold'/>
    </Link>
      <h2 className="mb-20 text-5xl font-bold font-heading">Your cart</h2></div>
    
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
          <div className="hidden lg:flex w-full">
            <div className="w-full lg:w-3/6">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Description
              </h4>
            </div>
            <div className="w-full lg:w-1/6">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Price
              </h4>
            </div>
            <div className="w-full lg:w-1/6 text-center">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Quantity
              </h4>
            </div>
            <div className="w-full lg:w-1/6 text-right">
              <h4 className="mb-6 text-left font-bold font-heading text-gray-500">
                Subtotal
              </h4>
            </div>
           
          </div>
          <div className="mb-12 h-[34rem] overflow-scroll py-6 border-t border-b border-gray-200">
            
          { cartItems.map(item =>(
            <CartItem Item={item} />
          ) ) }
          </div>
       
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="p-6 md:p-12 bg-green-700">
            <h2 className="mb-6 text-4xl font-bold font-heading text-white">
              Cart totals
            </h2>
            <div className="flex mb-8 items-center justify-between pb-5 border-b border-green-100">
              <span className="text-green-50">Subtotal</span>
              <span className="text-xl font-bold font-heading text-white">
                ${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              </span>
            </div>
            <h4 className="mb-2 text-xl font-bold font-heading text-white">
              Shipping
            </h4>
            <div className="flex mb-2 justify-between items-center">
              <span className="text-green-50">Next day</span>
              <span className="text-xl font-bold font-heading text-white">
                $11.00
              </span>
            </div>
            <div className="flex mb-10 justify-between items-center">
              <span className="text-green-50">Shipping to United States</span>
              <span className="text-xl font-bold font-heading text-white">
                -
              </span>
            </div>
            <div className="flex mb-10 justify-between items-center">
              <span className="text-xl font-bold font-heading text-white">
                Order total
              </span>
              <span className="text-xl font-bold font-heading text-white">
                $100.67
              </span>
            </div>
            <div
              className="block w-full py-4 bg-white hover:bg-green-50 cursor-pointer text-center  font-bold font-heading uppercase rounded-md transition duration-200"
        
            >
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default CartScreen