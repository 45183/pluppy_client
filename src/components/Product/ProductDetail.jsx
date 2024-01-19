import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Product/ProductDetail.css";
import data from "../../data";
import axios from "axios";
const ProductDetail = () => {
  const [product,setProduct] = useState(data);
  return (
    <div className="product_section">
    <div className="product_Container" id="Product_group">
      <CardGroup className="Product">
        {
          product.map((a,i)=>{
            return (
              <Product_Card product={product[i]} i={i+1}></Product_Card>
            )
          })
          }
      </CardGroup>
      <div className="plus_btn">
        <button
          onClick={() => {
            axios.get(
              "https://raw.githubusercontent.com/ming023/project/main/Products.json"
            )
            .then((result) => {
              if (Array.isArray(result.data.products)) {
                const copy = [...product, ...result.data.products];
                setProduct(copy);
              } else {
                console.error("Data is not an array:", result.data.products);
              }
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
            
          }}
        >
          <h3>더보기</h3>
        </button>
        </div>
    </div>
    </div>
  );
};
function Product_Card(props) {
  return (
    <Card key="" className="col-md-4" id="Product_box">
      <a href="">
        <Card.Img
          id="Product_img"
          variant="top"
          src={"./images/product"+props.i+".jpeg"}
          alt=""
        />
      </a>
      <Card.Body className="Product_body">
        <Card.Title id="Product_title">{props.product.title}</Card.Title>
        <Card.Text id="Product_content">{props.product.content}</Card.Text>
        <br></br>
        <Card.Text id="Product_percent">{props.product.percent}%</Card.Text>
        <Card.Text id="Product_price">{props.product.price}원</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div id="star">★</div>
        <div id="review">리뷰 {props.product.review} </div>
        <div id="btn-cart">
          <button className="btn-cart">장바구니</button>
        </div>
      </Card.Footer>
    </Card>
  );
}
export default ProductDetail;
