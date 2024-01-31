import React from "react";
import Header from "../../components/common/Header/Header";

const Detail = ({index}) => {
  return (
    <div>
      <Header />
      <h2>상품상세 페이지</h2>
      <img src={`/images/dog/product${index}".jpeg`} />
    </div>
  );
};
export default Detail;

