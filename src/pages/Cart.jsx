import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  const navigate = useNavigate()
  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }
  },[userCart])

  const checkout = ()=>{
    dispatch(emptyCart())
    alert('Order confirmed... Thank you for purchasing with us.');
    navigate('/')
  }
  return (
    
    <>
    <Header/>
        <div style={{padding:'100px 50px 150px'}} className='px-5'>
          {
            userCart?.length>0?
            <>
          <h1 className='text-5xl font-bold text-gray-900'>Cart Summary</h1>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="col-span-2 border rounded p-5 shadow">
              <table className="table-auto w-full">
                <thead>
                  <td className="font-semibold">#</td>
                  <td className="font-semibold">Name</td>
                  <td className="font-semibold">Image</td>
                  <td className="font-semibold">Quantity</td>
                  <td className="font-semibold">Price</td>
                  <td className="font-semibold">...</td>
                </thead>
                <tbody>
                 {
                  userCart?.map((product, index)=>(
                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{product?.title}</td>
                      <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                      <td>
                        <div className="felx">
                          <button onClick={()=>dispatch(decrementQuantity(product?.id))} className='font-bold'>-</button>
                          <input value={product?.quantity} type="text" style={{ width: '40px' }} className='border p-1 rounded mx-2' readOnly />
                          <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                        </div>
                      </td>
                      <td>$ {product?.totalPrice}</td>
                      <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className="text-red-600"><i className="fa-solid fa-trash"></i></button></td>
                    </tr>
                  ))
                 }
                </tbody>
              </table>
              <div className="float-right mt-5">
                <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More</Link>
              </div>
            </div>
            <div className="col-span-1 border rounded p-5 shadow">
              <h2 className="text-2xl font-bold my-5">Total Amount: <span className="text-red-600">$ {cartTotal}</span></h2>
              <hr />
              <button onClick={checkout} className="bg-green-500 rounded p-2 text-xl text-white w-full mt-4">Check Out</button>
            </div>
          </div>
            </>
          :
            <div className="flex flex-col justify-center items-center">
              <img src="https://krosfitsports.com/public/empty-cart.gif" alt="" className="w-100 h-1/2" />
              {/* <h1 className="text-4xl text-red-600 mt-3 text-bold">Your Wishlist is empty!!!</h1> */}
            </div>  
        }
        </div>
        
    </>
  )
}

export default Cart