import './App.css';
import { Event1 } from './event1';
import { Event2 } from './event2';
import { Event3 } from './event3';
import { Event4 } from './event4';
import { Event5 } from './event5';
import { Event6 } from './event6';
import { Fragment, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter, Routes, Route, useRoutes, Link } from 'react-router-dom';



function App() {

  const [date, setdate] = useState(new Date());

  const handlechange=date =>{
    setdate(date);

  }


  
  return (
    <BrowserRouter>
        <div className='container'>
      <div className='row' >
        <div className='col-2  ' id="nav" ><h6 id='fontx' className='mt-4'>Celebration</h6>
        <h6 id='fontx' className='mt-4'>Challenges</h6>
        <h6 id='fontx' className='mt-4'>Feauture work</h6>
        
        </div>
        <div className='col-10'>
          <div className='mt-4' >
            <div id="months">
            <Link to={'/'} id='font' className='btn btn-outline-warning'>Januray</Link>
            <Link to={'/event2'} id='font' className='btn btn-outline-warning'>February</Link>
            <Link to={'/event3'} id='font' className='btn btn-outline-warning'>March</Link>
            <Link to={'/event4'} id='font' className='btn btn-outline-warning'>April</Link>
            <Link to={'/event5'} id='font' className='btn btn-outline-warning'>May</Link>
            <Link to={'/event6'} id='font' className='btn btn-outline-warning'>June</Link>
           
         
            </div>
          </div>
          <div className='row'>
            <div className='col-8 mt-5' >

           


<Routes>
 


<Route path='/' element={< Event1/>} />
<Route path='/event2' element={< Event2/>} />
<Route path='/event3' element={< Event3/>} />
<Route path='/event4' element={< Event4/>} />
<Route path='/event5' element={< Event5/>} />
<Route path='/event6' element={< Event6/>} />

</Routes>



             
            </div>
            <div className='col-4  mt-5' >

             <div id="clr" >
              <Calendar   onChange={handlechange} value={date} />
             </div>

             <div className='mt-3'>

              <h3 className='mt-5'>See Past Celebration</h3>

              <Link id='chs' className='mt-3 ms-3  ' style={{textDecoration:'none',fontSize:'20px'}} >Mothers day</Link><br/>
              <Link id='chs' className='mt-5 ms-3 ' style={{textDecoration:'none',fontSize:'20px'}} >World environment day</Link><br/>
              <Link id='chs' className='mt-5 ms-3 ' style={{textDecoration:'none',fontSize:'20px'}} >International Yoga day</Link><br/>
              <Link id='chs' className='mt-5 ms-3 ' style={{textDecoration:'none',fontSize:'20px'}} >Backrid/eid ul-adha day</Link>

             </div>



            </div>
          </div>
          
          
          </div>
     
      </div>
  
    </div>




    </BrowserRouter>
  );
}

export default App;
