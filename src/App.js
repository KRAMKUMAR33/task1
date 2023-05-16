import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Event1 } from './event2';
import { Fragment, useState } from 'react';


function App() {

  const [currentDate, setCurrentDate] = useState(new Date());

  function getDaysInMonth() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }

  function getWeeksInMonth() {
    const daysInMonth = getDaysInMonth();
    const weeksInMonth = [];
    let week = [];

    daysInMonth.forEach((day) => {
      if (week.length > 0 && day.getDay() === 0) {
        weeksInMonth.push(week);
        week = [];
      }

      week.push(day);
    });

    if (week.length > 0) {
      weeksInMonth.push(week);
    }

    return weeksInMonth;
  }

  function handlePrevMonth() {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  }

  const weeksInMonth = getWeeksInMonth();
  
  return (
    <Fragment>
        <Container>
      <Row >
        <Col id="nav" ><h1 id='fontx' className='mt-4'>Celebration</h1>
        <h1 id='fontx' className='mt-4'>Challenges</h1>
        <h1 id='fontx' className='mt-4'>Feauture work</h1>
        
        </Col>
        <Col xs={8}>
          <Row className='mt-4' >
            <div id="months">
            <h3 id='font' className='btn btn-outline-warning'>januray</h3>
            <h3 id='font' className='btn btn-outline-warning'>february</h3>
            <h3 id='font' className='btn btn-outline-warning'>march</h3>
            <h3 id='font' className='btn btn-outline-warning'>april</h3>
            <h3 id='font' className='btn btn-outline-warning'>may</h3>
           
         
            </div>
          </Row>
          <Row>
            <Col xs={6}>

             

                 <Event1/>
                 <Event1/>
                 <Event1/>
                 <Event1/>
                 <Event1/>
             
            </Col>
            <Col xs={6}>

           

            <div>
      <div>
        <button onClick={handlePrevMonth}>{'<'}</button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeksInMonth.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index}>{day.getDate()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 

            </Col>
          </Row>
          
          
          </Col>
     
      </Row>
  
    </Container>



<BrowserRouter>


    <Routes>
     
   <Route path='/test' element={<Event1/>} />
 
    

    </Routes>

    </BrowserRouter>
    </Fragment>
  );
}

export default App;
