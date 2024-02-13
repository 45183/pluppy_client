import { useEffect, useState } from "react";
import "./Product.css";
import axiosInstance from "../../../utils/axios";
const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async() => {
    try{
      const res = await axiosInstance.get('/product');
      if (Array.isArray(res.data.data)) {
        setProducts(res.data.data);
        console.log(res.data.data)
      } else {
        console.error('Invalid response format:', res.data);
      }
    } catch(error){
      console.error(error);
    }
  }

  return (
    <div className="product">
      <div className="productManagement">
        <h3>상품관리</h3>
        <div className="product_container">
        <table className="product_table">
      <thead>
        <tr>
          <th>상품번호</th>
          <th>상품명</th>
          <th>판매가</th>
          <th>재고</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.name}</td>
            <td>{product.price}원</td>
            <td>{product.stock}개</td>
            <td>{product.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        <a href="/product/new">
          <button className="product_button">등록하기</button>
        </a>
      </div>
    </div>
  );
};
export default ProductList;
