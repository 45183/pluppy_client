// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import jjimBtn from "./images/jjimBtn.png";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import imageData from "./images/imageData";
// import './Detail.css';



// import axiosInstance from "../../utils/axios";

// const Detail = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [currentIndex, setCurrentImageIndex] = useState();
//   function handleChange(index) {
//     setCurrentImageIndex(index);
//   }


//   useEffect(() => {
//     getProduct(productId);
//   }, [productId]);

//   const getProduct = async (productId) => {
//     try {
//       const res = await axiosInstance.get(`/product/${productId}`);
//       console.log(res.data)
//       setProduct(res.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [quantity, setQuantity] = useState(1);

//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handeleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = async() => {
//     // 장바구니 로직 넣기
//     try{
//       const res = await axiosInstance.post('/cart/addCart', {
//         productId:productId, 
//         amount : quantity
//       });
//       console.log("Product added to cart:", res.data);
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//     }
//   };

//   const handleBuyNow = () => {
//     // 바로 구매 로직
//   };


//   return (
//     <div>
//       <Header />
//       {product ? (
//         <>
//         <div className="detail">
//           {/* 1.상품 이미지 좌우 버튼 */}
//           <table className="detailContainer">
//             <tr className="productImage">
//               <td>
//                 <Carousel
//                   className="imageSlider"
//                   showArrows={true}
//                   autoPlay={false}
//                   infiniteLoop={false}
//                   showThumbs={false}
//                   selectedItem={imageData[currentIndex]}
//                   onChange={handleChange}
//                   >
//                   {imageData.map((image, index) => (
//                     <div key={image.alt}>
//                       <img src={`http://localhost:5000/${product.image1}`} alt={product.name} />
//                     </div>
//                   ))}
//                 </Carousel>
//               </td>
//             </tr>
//             <tr className="productInfo">
//               {/* 2.상품명 */}
//               <td className="productInfoHeader">
//                 <p>{product.name}</p>
//                 <button className="jjimBtn"><img src={jjimBtn} /></button>
//               </td>
//               {/* 3.리뷰 별점 및 리뷰 보러가기 버튼 */}
//               <td className="starReview">
//                 <span>★★★★☆</span>
//                 <button>xxx개 리뷰 보기</button>
//               </td>

//               {/* 4.정상가, 할인율 할인된 가격 */}
//               <td className="detailPrice">
//                 <span className="greenPrice">상품 금액</span><p>{product.price}</p><span>원</span>
//               </td>

//               {/* 5.수량 선택 버튼 */}
//               <td className="quantity">
//                 <button onClick={handeleDecreaseQuantity}>-</button>
//                 <span>{quantity}</span>
//                 <button onClick={handleIncreaseQuantity}>+</button>
//               </td>

//               {/* 6.장바구니 담기 버튼 */}
//               <button className="addCart
//             " onClick={handleAddToCart}>장바구니</button>

//               {/* 7.바로 구매 버튼 */}
//               <button className="buyNow
//             " onClick={handleBuyNow}>바로 구매</button>
//             </tr>

//             {/* 8.상세이미지 */}
//             {/* <section>
//           <tr>이미지</div>
//           </section> */}
//           </table>
//         </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Detail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import jjimBtn from "./images/jjimBtn.png";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import imageData from "./images/imageData";
import './Detail.css';
import axiosInstance from "../../utils/axios";

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const getProduct = async (productId) => {
    try {
      const res = await axiosInstance.get(`/product/${productId}`);
      setProduct(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handeleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      // Send request to add product to cart
      const res = await axiosInstance.post('/cart/addCart', {
        productId,
        amount: quantity
      });
      console.log(res.data);
      // // Handle response
      // if (res.data.message === "UPDATE_SUCCESS") {
      //   // If the cart item was updated
      //   console.log("Product amount updated in cart.");
      // } else {
      //   // If a new cart item was added
      //   console.log("Product added to cart.");
      // }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleBuyNow = () => {
    // Buy now logic
  };

  return (
    <div>
      <Header />
      {product ? (
        <>
          <div className="detail">
            <table className="detailContainer">
              <tbody>
                <tr className="productImage">
                  <td>
                    <Carousel
                      className="imageSlider"
                      showArrows={true}
                      autoPlay={false}
                      infiniteLoop={false}
                      showThumbs={false}
                      selectedItem={imageData[currentIndex]}
                      onChange={(index) => setCurrentImageIndex(index)}
                    >
                      {imageData.map((image, index) => (
                        <div className="productDetail_img"key={image.alt}>
                          <img src={`http://localhost:8080/${product.image1}`} alt={product.name} />
                        </div>
                      ))}
                    </Carousel>
                  </td>
                </tr>
                <tr className="productInfo">
                  <td className="productInfoHeader">
                    <p>{product.name}</p>
                    <button className="jjimBtn"><img src={jjimBtn} alt="jjimBtn" /></button>
                  </td>
                  <td className="starReview">
                    <span>★★★★☆</span>
                    <button>xxx개 리뷰 보기</button>
                  </td>
                  <td className="detailPrice">
                    <span className="greenPrice">상품 금액</span><p>{product.price}</p><span>원</span>
                  </td>
                  <td className="quantity">
                    <button onClick={handeleDecreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncreaseQuantity}>+</button>
                  </td>
                  <button className="addCart" onClick={handleAddToCart}>장바구니</button>
                  <button className="buyNow" onClick={handleBuyNow}>바로 구매</button>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;