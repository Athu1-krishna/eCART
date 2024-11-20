import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { current } from '@reduxjs/toolkit'
const Home = () => {
  const dispatch = useDispatch()
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  // console.log(allProducts);
  // console.log(loading);
  // console.log(errorMsg);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length/productsPerPage);
  const currentPageProductLastIndex = currentPage * productsPerPage;
  const currentPageFirstIndex = currentPageProductLastIndex - productsPerPage;
  const visibleAllProducts = allProducts?.slice(currentPageFirstIndex, currentPageProductLastIndex)
  
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
// Pagination
  const navigateToNextPage = () => {
    if(currentPage != totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPrevPage = () => {
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
        <Header insideHome={true}/>
        <div style={{padding:'150px'}} className='container px-4 mx-auto'>
            {
              loading? 
              <div className="flex justify-center items-center my-5 text-center">
                <img src="https://i.pinimg.com/originals/3d/2e/aa/3d2eaa40f3660e529ff047a8866983bc.gif" alt="" />
              </div>
              :
              <>
              <div className="grid grid-cols-4 gap-5">
               {
                  allProducts?.length>0?
                  visibleAllProducts?.map((item)=>(
                    <div key={item?.id} style={{width:'280px'}} className="rounded border p-5 shadow">
                      <img width={'100%'} height={'150px'} src={item?.thumbnail} alt="" />
                      <div className="text-center">
                        <h3 className="text-xl font-bold">{item?.title}</h3>
                        <Link to={`/${item?.id}/view`} className='bg-yellow-400 rounded p-1 mt-3 inline-block text-yellow-100' >View More</Link>
                      </div>
                    </div>
                  ))
                 
                  :
                    <div className="flex justify-center items-center font-bold text-red-700 my-5 text-center">
                      Products Not Found!!!
                    </div>
               }
              </div>
              <div className="text-2xl text-center font-bold mt-20">
                <span onClick={navigateToPrevPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navigateToNextPage} className="cursor-pointer"><i className="fa-solid fa-forward ms-5"></i></span>
              </div>
            </>}
        </div>

    </>
  )
}

export default Home