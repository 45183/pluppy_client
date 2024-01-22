import React, { useState, useEffect} from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Product/ProductDetail.css";
import axios from "axios";
const ProductDetail2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 axios를 사용하여 초기 상품 데이터를 불러옵니다.
    axios
      .get(
        "https://raw.githubusercontent.com/ming023/project/main/Products2.json"
      )
      .then((result) => {
        if (Array.isArray(result.data.products)) {
          setProducts(result.data.products);
        } else {
          console.error(result.data.products);
        }
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생", error);
      });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 합니다.

  return (
      <div className="product_Container" id="Product_group">
        <CardGroup className="Product">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index + 1} />
          ))}
        </CardGroup>
    </div>
  );
};

function ProductCard({ product, index }) {
  return (
    <Card className="col-md-4" id="Product_box">
      <a href="">
        <Card.Img
          id="Product_img"
          variant="top"
          src={`./images/cat/product${index}.jpeg`}
          alt=""
        />
      </a>
      <Card.Body className="Product_body">
        <Card.Title id="Product_title">{product.title}</Card.Title>
        <Card.Text id="Product_content">{product.content}</Card.Text>
        <br></br>
        <Card.Text id="Product_percent">{product.percent}%</Card.Text>
        <Card.Text id="Product_price">{product.price}원</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div id="star">★</div>
        <div id="review">리뷰 {product.review} </div>
        <div id="btn-cart">
          <button className="btn-cart">장바구니</button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ProductDetail2;