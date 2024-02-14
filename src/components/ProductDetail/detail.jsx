import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import axiosInstance from "../../utils/axios";

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const getProduct = async (productId) => {
    try {
      const res = await axiosInstance.get(`/product/${productId}`);
      console.log(res.data)
      setProduct(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <h2>상품상세 페이지</h2>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={`http://localhost:5000/${product.image1}`} alt={product.name} />
          <p>가격: {product.price}</p>
          <p>설명: {product.description}</p>
          <button>장바구니</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;