import "./Product.css";
import ProductTable from "./ProductTable";
const ProductList = () => {
  return (
    <div className="product">
      <div className="productManagement">
        <h3>상품관리</h3>
        <div className="product_container">
          <ProductTable />
        </div>
        <a href="/product/new">
          <button className="product_button">등록하기</button>
        </a>
      </div>
    </div>
  );
};
export default ProductList;
