
import React from 'react';
import  Main  from './components/Main';
import BookingPage from './components/BookingPage';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ConfirmedBooking from './components/ConfirmedBooking';





// API fxn definitions

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

// Reducer fxn definitions


export const updateTimes = (state, action) => {

  let date = action.newDate;
  console.log(date);
  if (action.type === 'updateTimes'){
    return fetchAPI(date);
  }else{
    return state;
  }

}

export const initializeTimes = () => {
  let date = new Date();
  return fetchAPI(date);
};

// Submit fxn

const submitForm = (formData) => {
  return submitAPI(formData);
}

// App component definition

function App() {
  // const [availableTimes, setAvailableTimes] = React.useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  React.useEffect(() => {

    initializeTimes();
}, []);
  

  const [availableTimes, dispatch] = React.useReducer(updateTimes, initializeTimes());
  
  

  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      
      </Routes>
    </main>
  );
}

export default App;
