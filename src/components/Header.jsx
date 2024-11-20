import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'
const Header = ({ insideHome }) => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  return (
    <nav className='flex bg-yellow-400 fixed w-full p-5 text-gray-800 font-bold'>
        <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast'></i> eCart</Link>
        <ul className="flex-1 text-right">
            {
          insideHome && <li className="list-none inline-block px-5"><input style={{ width: '300px' }} onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase))} className='rounded p-1' type="text" placeholder='Search product here.' /></li>
            }
              <li className="list-none inline-block px-5"><Link to={'/wishlist'}> <i className="fa-solid fa-heart text-red-600"></i>Wishlist <span className='bg-black text-white rounded-full p-1'>{userWishlist.length}</span></Link></li>
            <li className="list-none inline-block px-5"><Link to={'/cart'}> <i className="fa-solid fa-cart-plus text-green-600"></i>Cart <span className='bg-black text-white rounded-full p-1'>{userCart?.length}</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header