import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetail.css'
function ProductDetail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://caiman-talented-hopefully.ngrok-free.app/product');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='product_Container'>
        <div className='product_Detail'>
          {data && (
            <ul id='product_box'>
              {data.map(item => (
                <li id='product_li' key={item.id}>
                  <img src={item.productPhoto} width={300}/>
                  <strong>종류:</strong> {item.productName} {' '}
                  <strong>가격:</strong> {item.productPrice} {' '}
                  <strong>리뷰:</strong> {item.reviewCount} {' '}
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
  );
}

export default ProductDetail;