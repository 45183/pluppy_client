import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Product/ProductDetail.css'
function ProductDetail() {
  // State to store the data from the API
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Replace 'YOUR_JSON_API_URL' with the actual URL of your JSON dataset
        const response = await axios.get('https://caiman-talented-hopefully.ngrok-free.app/product');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <div className='product_Container'>
        <div className='Product'>
          {data && (
            <ul id='Product_box'>
              {data.map(item => (
                <li key={item.id}>
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