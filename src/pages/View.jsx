import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product, setProduct] = useState({})
  // console.log(product);
  
  const {id} = useParams();
  // console.log(id);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    // console.log(allProducts.find(item=>item.id==id));
    setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

const handleCart = () =>{
  dispatch(addToCart(product))
  const existingProduct = userCart?.find(item=>item?.id==id)
  if(existingProduct){
    alert("Product quantity is incrementing in your cart!!!")
  }else{
    alert("Product added to your cart!!!")
  }
}
  
  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item=>item?.id==id)
      if(existingProduct){
        alert("product already in your wishlist!!")
      }
      else{
        alert("Product added to your wishlist!!!")
        dispatch(addToWishlist(product))
      }
    
  }
  return (
    <>
        <Header/>
        <div style={{padding:'200px 150px'}} className='flex flex-col mx-5'>
            <div className="grid grid-cols-2 item-center h-screen">
                  <img width={"350px"} height={'250px'} src={product?.thumbnail} alt="" />
                  <div>
                    <h3 className='font-bold'>PId : {product?.id}</h3>
                     <h1 className='text-5xl  font-bold'>{product?.title}</h1>
                    <h4 className="font-bold text-red-600 text-2xl">${product?.price}</h4>
                    <h4>Brand : {product?.brand}</h4>
                    <h4>Category : {product?.category}</h4>
                    <p>   
                      <span className='font-bold'>Description :</span> {product?.description}
                    </p>
                    <h3 className='font-bold mt-4'>Client Review</h3>
                    {
                      product?.reviews?.length>0?
                      product?.reviews?.map(item=>(
                        <div className="shadow border rounded p-2 mb-2">
                          <h5>
                            <span className="font-bold">{item?.reviewerName} </span> : <span>{item?.comment}</span>
                          </h5>
                          <p>Rating : {item?.rating} 💥</p>
                        </div>
                      ))
                      :
                      <div className="font-bold text-red-500">No Reviews yet!!!</div>
                    }
                    <div className="flex justify-between mt-5">
                      <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2' >Add To Wishlist</button>
                      <button onClick={handleCart} className='bg-green-600 rounded text-white p-2'>Add To Cart </button>
                    </div>
                  </div>
                  

            </div>
        </div>
    </>
  )
}

export default View