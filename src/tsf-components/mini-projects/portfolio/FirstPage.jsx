import React from 'react'
import { Routes, Route  } from 'react-router-dom';
import Info from './Info';
import Blog from './Blog';
import Home from './Home';
const FirstPage = () => {

  return (
    


      <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/info" element={<Info />}/>
            
          

      </Routes>
    
  )
}


export default FirstPage;