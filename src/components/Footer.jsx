import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '250px', marginTop: '20px' }} className=' mt-5 w-full bg-yellow-500 text-gray-900 p-4'>
      <div className="flex justify-between p-4">
        <div style={{ width: '400px' }} className="intro">
          <h5 className='text-xl font-bold'><i className="fa-solid fa-truck-fast me-2"></i> eCart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="flex flex-col">
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: '#333' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: '#333' }}>Home Page</Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: '#333' }}>Watch History Page</Link>
        </div>
        <div className="flex flex-col">
          <h5 className='text-xl font-bold'>Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: '#333' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: '#333' }} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: '#333' }} target='_blank'>React Router</a>
        </div>
        <div className="flex flex-col ">
          <h5 className='text-xl font-bold'> Contact Us </h5>
          <div className="flex">
            <input placeholder='Enter your email here' type="text" className="rounded p-1" />
            <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right "></i></button>
          </div>
          <div className="icons flex justify-between mt-3">
            <a href="" style={{ textDecoration: 'none', color: '#333' }} target='_blank'> <i className="fa-brands fa-twitter"></i> </a>
            <a href="" style={{ textDecoration: 'none', color: '#333' }} target='_blank'> <i className="fa-brands fa-instagram"></i> </a>
            <a href="" style={{ textDecoration: 'none', color: '#333' }} target='_blank'> <i className="fa-brands fa-facebook"></i> </a>
            <a href="" style={{ textDecoration: 'none', color: '#333' }} target='_blank'> <i className="fa-brands fa-linkedin"></i> </a>
            <a href="" style={{ textDecoration: 'none', color: '#333' }} target='_blank'> <i className="fa-brands fa-github"></i> </a>
            <a href="" style={{ textDecoration: 'none', color: '#333' }} target='_blank'> <i className="fa-solid fa-phone"></i> </a>
          </div>
        </div>
      </div>
      <hr style={{color:'#333'}}/>
      <p className='text-center mt-3 text-gray-800'>Copyright &copy; Athul Krishna.</p>
    </div>
  )
}

export default Footer