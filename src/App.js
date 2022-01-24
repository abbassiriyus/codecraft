import React from 'react'
import './App.css';
import Corusel from './js/Corusel';
import Loyiha from './js/Loyiha';
import Loyiham from './js/Loyiham';
function App() {
  return (
   <div style={{overflowX:'hidden'}}>
  
<Loyiha/>
{/* /////CARUSEL///// */}
<div className='container-fluid'>  
  <div className='row '> <h1 className='text-center'>salom dunyo</h1>
    <div className='col-lg-4 col-md-12 '>
      <Corusel />
    </div>
    <div className='col-lg-4 col-md-12'>
      <Corusel />
    </div> 
    <div className='col-lg-4 col-md-12'>
      <Corusel />
    </div>
  </div>
</div>



<div className='container-fluid'>  
  <div className='row '> <h1 className='text-center'>salom dunyo</h1>
    <div className='col-lg-4 col-md-12 '>
      <Corusel />
    </div>
    <div className='col-lg-4 col-md-12'>
      <Corusel />
    </div> 
    <div className='col-lg-4 col-md-12'>
      <Corusel />
    </div>
  </div>
</div>


 

<Loyiham />

    </div>
  );
}

export default App;
