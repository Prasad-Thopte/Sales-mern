import React from 'react'
import "../css/style.css";
import  { useState, useEffect } from 'react';
import axios from 'axios';

function Revenue() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Make API request to retrieve total amount of all products
    axios.get('http://localhost:9002/revenue')
      .then(response => {
        setTotalAmount(response.data.totalAmount);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='text'>
      <h3>Today's Revenue Is Rs. {totalAmount}</h3></div>
  )
}

export default Revenue