import React from 'react';
import styled from 'styled-components';

const AdminHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(72, 72, 72);
  
  header {
    margin-top: 30px;
    nav {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          margin-right: 10px;

          &:last-child {
            margin-right: 0;
          }

          a {
            text-decoration: none;
            color: white;
            font-weight: 400;
          }
        }
      }
    }
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const AdminHeaderComponent = () => {
  return (
    <AdminHeader>
      <header>
        <nav>
          <ul>
            <li className="navLogo">
              <a href="/admin">
                <Img src="/logo2.png" alt="Logo" />
              </a>
            </li>
            <li><a href="/user">회원관리</a></li>
            <li><a href="/order">주문관리</a></li>
            <li><a href="/product">상품관리</a></li>
            <li><a href="/">홈페이지</a></li>
            <li><a href="/login">로그아웃</a></li>
          </ul>
        </nav>
      </header>
    </AdminHeader>
  );
};

export default AdminHeaderComponent;
