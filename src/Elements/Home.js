import React, { useContext, useEffect } from 'react'
import bookContext from '../Context/bookContext'
import { useNavigate } from 'react-router-dom';
import Books from './Books';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const {user,getBooks,getCartData,setPageIndex,pageIndex,setPageSize,pageSize} = useContext(bookContext);
  useEffect(()=>{
    if(!user) {
      navigate('/login')
    } 
    else {
      // setPageIndex(pageIndex=>1)
      // setPageSize(pageSize=>5)
      getBooks();
      getCartData();
    }
    // eslint-disable-next-line
  },[])
  return (
    <div id='homeMainDiv' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%'}}>
      <Books/>
    </div>
  )
}

export default Home
