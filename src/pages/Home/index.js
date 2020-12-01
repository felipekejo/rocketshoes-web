import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Aside from '../../components/Aside';
import { ProductList, BodyHome, Category } from './styles';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('categories').then(response => {
      setProducts(response.data);
    })
  }, []);

  return (
    <BodyHome>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3 className={Category}>{product.category}</h3>
          </li>
        ))}
      </ProductList>
      <Aside />
    </BodyHome>
  );
}

export default Home;
