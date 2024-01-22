import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import "../Product/Product.css";
import ProductDetail from './ProductDetail';
import ProductDetail2 from './ProductDetail2';
const Product = () => {
    const [탭, 탭변경] = useState(0);

    return (
      <div className="product">
        {/* 카테고리를 나타내는 부분입니다. (아직 내용이 없습니다.) */}
{        <div className="category">
        <ul>
                <li><a href='/store'>강아지</a></li>
                <li><a href='/cat'>고양이</a></li>
            </ul>
        </div>}
        {/* 탭을 선택할 수 있는 네비게이션 바를 표시합니다. */}
        <Nav variant="tabs" defaultActiveKey="link0" className="content_navbar">
          <Nav.Item>
            <Nav.Link onClick={() => { 탭변경(0); }} eventKey="link0">전체</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { 탭변경(1); }} eventKey="link1">강아지</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { 탭변경(2); }} eventKey="link2">고양이</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* 선택된 탭에 따라 콘텐츠를 표시하는 컴포넌트를 호출합니다. */}
        <TapContent 탭={탭}   />
      </div>
    );
  }
  
  function TapContent({ 탭}) {
    // 페이드 효과를 제어하는 'fade' 상태를 정의합니다.
    const [fade, setFade] = useState("");
  
    // useEffect를 사용하여 '탭'이 변경될 때마다 페이드 효과를 적용합니다.
    useEffect(() => {
      setFade("end");
      return () => {
        setFade("");
      };
    }, [탭]);
  
    // 선택된 탭에 따라 적절한 컨텐츠를 표시합니다.
    return (
      <div className={"start" + fade}>
        {
          [<div><ProductDetail/>
          <ProductDetail2/></div>,
          <div><ProductDetail/></div>,
          <div><ProductDetail2/></div>,
          ][탭]
        }
      </div>
    );
  }
export default Product; 