import React from 'react'
import './App.css';
import Nashprinsip from '../src/js/Nash_prinsip';
import Dashboard from '../src/js/Dashboard'
import Kurs from '../src/js/kurs'
import Footer from '../src/js/footer'
import Accordion from '../src/js/accordion'
import Narxlar from './js/Narxlar';
import Xabaryuborish from './js/Xabaryuborish';

function App() {
  return (
   <div>
 <Dashboard/>
 <Nashprinsip/>
 <Kurs/>
 <Accordion/><Narxlar/>
 <Footer/>


    </div>
  );
}

export default App;
