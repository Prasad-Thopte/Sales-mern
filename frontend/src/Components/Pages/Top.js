import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import "../css/style.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Top() {
 
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Make API request to retrieve products
      axios.get('http://localhost:9002/top-product')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <>
      <Container>
      
        <div className='text'>
          <h3>Top 5 Sales</h3></div>
        
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Sales id:</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Sale Amount</th>
            </tr>
          </thead>
          { products.map(product => (
          <tbody>
            <tr>
            <td key={product._id}/>
              <td>{product._id}</td>
             
              <td>{product.pname}</td>
              <td>{product.qty}</td>
              <td>{product.amt}</td>
        
            </tr>
          
           
          </tbody>
          ))}
        </Table>

        
      </Container>
    </>
  );
         }

export default Top;