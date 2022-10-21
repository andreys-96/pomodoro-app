import React from 'react';
import './App.css';
import { Product } from './components/product';
import { useProducts } from './hooks/products';

function App() {
  const { products, loading, error } = useProducts()
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <h3 className='text-center text-green-500'>Loading...</h3> }
      { error && <h3 className='text-center text-red-600'> Error loading data! </h3> }
      { products && products.map( (el, index) => <Product product = {el} key = {index}/>)}
    </div>
  );
}

export default App;
