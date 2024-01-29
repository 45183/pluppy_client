import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetail2() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://caiman-talented-hopefully.ngrok-free.app/product/cat';

    axios.get(apiUrl)
      .then(response => setProductData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
    </div>
  );
}

export default ProductDetail2;
