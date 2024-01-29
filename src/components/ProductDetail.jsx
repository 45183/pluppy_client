import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "../styles/ProductDetail.css";;

const ProductDetail = () => {
    return (
        <div className="Container" id="Product_group">
        <CardGroup className="Product">
            <Card key='' className="col-md-4" id="Product_box">
              <a href=''><Card.Img id="Product_img" variant="top" src='./images/product_1.png' alt='' /></a>
              <Card.Body className="Product_body">
                <Card.Title id="Product_title"></Card.Title>
                <Card.Text id="Product_content"></Card.Text><br></br>
                <Card.Text id="Product_percent">%</Card.Text>
                <Card.Text id="Product_price">원</Card.Text>
              </Card.Body>
              <Card.Footer>
              <div id="btn_star">★  </div>
              <div id="btn_review">리뷰 </div>
                <div  id="btn-success">
                <button className="btn btn-success">
                  장바구니
                </button></div>
              </Card.Footer>
            </Card>
            <Card key='' className="col-md-4" id="Product_box">
              <a href=''><Card.Img id="Product_img" variant="top" src='./images/product_2.png' alt='' /></a>
              <Card.Body className="Product_body">
                <Card.Title id="Product_title"></Card.Title>
                <Card.Text id="Product_content"></Card.Text><br></br>
                <Card.Text id="Product_percent">%</Card.Text>
                <Card.Text id="Product_price">원</Card.Text>
              </Card.Body>
              <Card.Footer>
              <div id="btn_star">★  </div>
              <div id="btn_review">리뷰 </div>
                <div  id="btn-success">
                <button className="btn btn-success">
                  장바구니
                </button></div>
              </Card.Footer>
            </Card>
            <Card key='' className="col-md-4" id="Product_box">
              <a href=''><Card.Img id="Product_img" variant="top" src='./images/product_3.png' alt='' /></a>
              <Card.Body className="Product_body">
                <Card.Title id="Product_title"></Card.Title>
                <Card.Text id="Product_content"></Card.Text><br></br>
                <Card.Text id="Product_percent">%</Card.Text>
                <Card.Text id="Product_price">원</Card.Text>
              </Card.Body>
              <Card.Footer>
              <div id="btn_star">★  </div>
              <div id="btn_review">리뷰 </div>
                <div  id="btn-success">
                <button className="btn btn-success">
                  장바구니
                </button></div>
              </Card.Footer>
            </Card>
            <Card key='' className="col-md-4" id="Product_box">
              <a href=''><Card.Img id="Product_img" variant="top" src='./images/product_4.png' alt='' /></a>
              <Card.Body className="Product_body">
                <Card.Title id="Product_title"></Card.Title>
                <Card.Text id="Product_content"></Card.Text><br></br>
                <Card.Text id="Product_percent">%</Card.Text>
                <Card.Text id="Product_price">원</Card.Text>
              </Card.Body>
              <Card.Footer>
              <div id="btn_star">★  </div>
              <div id="btn_review">리뷰 </div>
                <div id="btn-success">
                <button className="btn btn-success">
                  장바구니
                </button></div>
              </Card.Footer>
            </Card>
        </CardGroup>
      </div>
    )
}
export default ProductDetail;