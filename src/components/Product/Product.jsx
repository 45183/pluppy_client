import React, { useState, useEffect } from 'react';
import '../Product/Product.css';
import '../Product/ProductDetail.css'
import axiosInstance from '../../utils/axios';

function Product() {
  const categories = [
    {
      parentCategoryId: 1,
      name: "강아지",
      children: [
        { categoryId: 11, name: "장난감" },
        { categoryId: 12, name: "사료" },
        { categoryId: 13, name: "간식" },
        { categoryId: 14, name: "옷" },
        { categoryId: 15, name: "용품" }
      ]
    },
    {
      parentCategoryId: 2,
      name: "고양이",
      children: [
        { categoryId: 21, name: "장난감" },
        { categoryId: 22, name: "사료" },
        { categoryId: 23, name: "간식" },
        { categoryId: 24, name: "옷" },
        { categoryId: 25, name: "용품" }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axiosInstance.get('/product');
      if (Array.isArray(res.data.data)) {
        setProducts(res.data.data);
        console.log(res.data.data[0].image1);
      } else {
        console.error('Invalid response format:', res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAllProductClick = async () => {
    try {
      const res = await axiosInstance.get('/product');
      if (Array.isArray(res.data.data)) {
        setProducts(res.data.data);
        console.log(res.data.data[0].image1);
      } else {
        console.error('Invalid response format:', res.data);
      }
    } catch (error) {
      console.error(error);
    }
    setSelectedCategory(null);
  };

  const handleMainCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(category.parentCategoryId);
  };

  const handleSubCategoryClick = async (category) => {
    console.log(category.categoryId);
    try {
      const res = await axiosInstance.get(`/product/category/${category.categoryId}`);
      if (Array.isArray(res.data.data)) {
        setProducts(res.data.data);
        console.log(res.data.data[0].image1);
      } else {
        console.error('Invalid response format:', res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (productId) => {
    // 상세 페이지로 이동
    window.location.href = `/store/${productId}`;
  };


  return (
    <div className="product_content">
      <div className="category">
        <div className='main_category'>
        <button onClick={handleAllProductClick}>전체</button>
          <button onClick={() => handleMainCategoryClick(categories[0])}>강아지</button>
          <button onClick={() => handleMainCategoryClick(categories[1])}>고양이</button>
        </div>
        {selectedCategory && selectedCategory.children && (
          <div className='sub_category'>
            {selectedCategory.children.map((childCategory) => (
              <div key={childCategory.categoryId}>
                <button
                  onClick={() => handleSubCategoryClick(childCategory)}
                  style={{ marginRight: '10px' }}
                >
                  {childCategory.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='product_Container'>
        <div className='product_Detail'>
          {products && (
            <ul id='product_box'>
              {products.map((product) => (
                <li id='product_li' key={product.productId} onClick={() => handleClick(product.productId)}>
                  <img src={`http://localhost:5000/${product.image1}`} width={300} alt={product.name}/>
                  <strong>이름:</strong> {product.name} {' '}
                  <strong>가격:</strong> {product.price} {' '}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;