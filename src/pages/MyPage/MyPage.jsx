// import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
// import DaumPostcode from "react-daum-postcode";
// import Modal from "react-modal";
// import axiosInstance from "../../utils/axios";
// import Cookies from "js-cookie";

// const userId = Cookies.get('userId');

// const MyPage = () => {
//   const [user, setUser] = useState({ name: "" }); // Assuming you have a user state
//   const [order, setOrder] = useState(null);

//   console.log(userId)

//   useEffect(() => {
//     getUser(userId);
//     getOrder(userId);
//   }, [userId]);

//   const getUser = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/user/${userId}`);
//       setUser(res.data.data);
//       console.log(res.data.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const getOrder = async (userId) => {
//     try{
//       const res = await axiosInstance.get(`/order/${userId}`);
//       setOrder(res.data.data);
//       console.log(res.data.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     };
//   };

//   console.log(user)
//   console.log(order)

//   return (
//     <div>
//       <Header />
//       <div className="myPage_delivery">
//         <div id="myPage">
//           <h2>
//             어서오세요!<br /> {user.name}님 🐾
//           </h2>
//           <ul className="delivery_state">
//             <li>임금대기</li>
//             <p>〉</p>
//             <li>결제완료</li>
//             <p>〉</p>
//             <li>상품준비중</li>
//             <p>〉</p>
//             <li>배송중</li>
//             <p>〉</p>
//             <li>배송완료</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <nav>
//           <ul className="myPage_container">
//             <h3>나의 쇼핑정보</h3>
//               <a href="/myPage">주문배송조회</a>
//             <br></br>
//             <h3>나의 계정</h3>

//               <a href="/modify">회원정보</a>

//           </ul>
//         </nav>
//       </div>
//       <div className="delivery_info"> 
//         <div className="delivery_content">
//         <table id="delivery_table">
//             <tr>
//               <th>주문일</th>
//               <th>상품명</th>
//               <th>수량</th>
//               <th>총 결제금액</th>
//               <th>주문상태</th>
//             </tr>
//             {order && order.map((item, index) => {
//           // Check if this item is the first occurrence of its createdAt, userId, and totalPrice combination
//           const isFirstOccurrence = order.findIndex(
//             otherItem =>
//               otherItem.createdAt === item.createdAt &&
//               otherItem.userId === item.userId &&
//               otherItem.totalPrice === item.totalPrice
//           ) === index;

//           // If it's the first occurrence, render the row; otherwise, skip rendering
//           return isFirstOccurrence && (
//             <tr key={index}>
//               <td>{new Date(item.createdAt).toLocaleDateString()}</td>
//               <td>{item.productId}</td>
//               <td>{item.amount}</td>
//               <td>{item.totalPrice}원</td>
//               <td>{item.orderStatus}</td>
//             </tr>
//           );
//         })}
//         </table>
//       </div>
//       </div>
//     </div>
//   );
// };


// export default MyPage;








// import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
// import axiosInstance from "../../utils/axios";
// import Cookies from "js-cookie";

// const userId = Cookies.get('userId');

// const MyPage = () => {
//   const [user, setUser] = useState({ name: "" });
//   const [order, setOrder] = useState(null);
//   const [products, setProducts] = useState({});

//   useEffect(() => {
//     getUser(userId);
//     getOrder(userId);
//   }, [userId]);

//   const getUser = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/user/${userId}`);
//       setUser(res.data.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const getOrder = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/order/${userId}`);
//       setOrder(res.data.data);
      
//       // Extract unique productIds from orders
//       const productIds = [...new Set(res.data.data.map(item => item.productId))];
      
//       // Fetch product information for each productId
//       const products = {};
//       for (const productId of productIds) {
//         const productRes = await axiosInstance.get(`/product/${productId}`);
//         products[productId] = productRes.data.data.name;
//       }
//       setProducts(products);
//     } catch (error) {
//       console.error('Error fetching order data:', error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="myPage_delivery">
//         <div id="myPage">
//           <h2>
//             어서오세요!<br /> {user.name}님 🐾
//           </h2>
//           <ul className="delivery_state">
//             <li>임금대기</li>
//             <p>〉</p>
//             <li>결제완료</li>
//             <p>〉</p>
//             <li>상품준비중</li>
//             <p>〉</p>
//             <li>배송중</li>
//             <p>〉</p>
//             <li>배송완료</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <nav>
//           <ul className="myPage_container">
//             <h3>나의 쇼핑정보</h3>
//               <a href="/myPage">주문배송조회</a>
//             <br></br>
//             <h3>나의 계정</h3>
//               <a href="/modify">회원정보</a>
//           </ul>
//         </nav>
//       </div>
//       <div className="delivery_info"> 
//         <div className="delivery_content">
//           <table id="delivery_table">
//             <thead>
//               <tr>
//                 <th>주문일</th>
//                 <th>상품명</th>
//                 <th>수량</th>
//                 <th>총 결제금액</th>
//                 <th>주문상태</th>
//               </tr>
//             </thead>
//             <tbody>
//               {order && order.map((item, index) => (
//                 <tr key={index}>
//                   <td>{new Date(item.createdAt).toLocaleDateString()}</td>
//                   <td>{products[item.productId]}</td>
//                   <td>{item.amount}</td>
//                   <td>{item.totalPrice}원</td>
//                   <td>{item.orderStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPage;











// import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
// import axiosInstance from "../../utils/axios";
// import Cookies from "js-cookie";

// const userId = Cookies.get('userId');

// const MyPage = () => {
//   const [user, setUser] = useState({ name: "" });
//   const [order, setOrder] = useState(null);
//   const [uniqueOrders, setUniqueOrders] = useState([]);

//   useEffect(() => {
//     getUser(userId);
//     getOrder(userId);
//   }, [userId]);

//   const getUser = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/user/${userId}`);
//       setUser(res.data.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const getOrder = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/order/${userId}`);
//       setOrder(res.data.data);

//       // Filter orders to keep only unique items based on createdAt, userId, and totalPrice
//       const uniqueOrders = [];
//       const seen = new Set();
//       res.data.data.forEach(item => {
//         const key = `${item.createdAt}-${item.userId}-${item.totalPrice}`;
//         if (!seen.has(key)) {
//           seen.add(key);
//           uniqueOrders.push(item);
//         }
//       });
//       setUniqueOrders(uniqueOrders);
//     } catch (error) {
//       console.error('Error fetching order data:', error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="myPage_delivery">
//         <div id="myPage">
//           <h2>
//             어서오세요!<br /> {user.name}님 🐾
//           </h2>
//           <ul className="delivery_state">
//             <li>임금대기</li>
//             <p>〉</p>
//             <li>결제완료</li>
//             <p>〉</p>
//             <li>상품준비중</li>
//             <p>〉</p>
//             <li>배송중</li>
//             <p>〉</p>
//             <li>배송완료</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <nav>
//           <ul className="myPage_container">
//             <h3>나의 쇼핑정보</h3>
//               <a href="/myPage">주문배송조회</a>
//             <br></br>
//             <h3>나의 계정</h3>
//               <a href="/modify">회원정보</a>
//           </ul>
//         </nav>
//       </div>
//       <div className="delivery_info"> 
//         <div className="delivery_content">
//           <table id="delivery_table">
//             <thead>
//               <tr>
//                 <th>주문일</th>
//                 <th>상품명</th>
//                 <th>수량</th>
//                 <th>총 결제금액</th>
//                 <th>주문상태</th>
//               </tr>
//             </thead>
//             <tbody>
//               {uniqueOrders.map((item, index) => (
//                 <tr key={index}>
//                   <td>{new Date(item.createdAt).toLocaleDateString()}</td>
//                   <td>{item.productId}</td>
//                   <td>{item.amount}</td>
//                   <td>{item.totalPrice}원</td>
//                   <td>{item.orderStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPage;










// import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
// import axiosInstance from "../../utils/axios";
// import Cookies from "js-cookie";

// const userId = Cookies.get('userId');

// const MyPage = () => {
//   const [user, setUser] = useState({ name: "" });
//   const [order, setOrder] = useState(null);
//   const [uniqueOrders, setUniqueOrders] = useState([]);

//   useEffect(() => {
//     getUser(userId);
//     getOrder(userId);
//   }, [userId]);

//   const getUser = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/user/${userId}`);
//       setUser(res.data.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const getOrder = async (userId) => {
//     try {
//       const res = await axiosInstance.get(`/order/${userId}`);
//       setOrder(res.data.data);

//       // Filter orders to keep only unique items based on createdAt, userId, and totalPrice
//       const uniqueOrders = [];
//       const seen = new Set();
//       res.data.data.forEach(item => {
//         const key = `${item.createdAt}-${item.userId}-${item.totalPrice}`;
//         if (!seen.has(key)) {
//           seen.add(key);
//           uniqueOrders.push(item);
//         }
//       });
//       setUniqueOrders(uniqueOrders);
//     } catch (error) {
//       console.error('Error fetching order data:', error);
//     }
//   };

//   const getProduct = async (productId) => {
//     try {
//       const res = await axiosInstance.get(`/product/${productId}`);
//       return res.data.name; // Assuming product name is returned from the API
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//       return ''; // Return empty string if product name cannot be fetched
//     }
//   };

//   useEffect(() => {
//     if (order) {
//       const fetchProductNames = async () => {
//         const updatedOrders = await Promise.all(
//           order.map(async item => {
//             const productName = await getProduct(item.productId);
//             return { ...item, productName };
//           })
//         );
//         setUniqueOrders(updatedOrders);
//       };
//       fetchProductNames();
//     }
//   }, [order]);

//   return (
//     <div>
//       <Header />
//       <div className="myPage_delivery">
//         <div id="myPage">
//           <h2>
//             어서오세요!<br /> {user.name}님 🐾
//           </h2>
//           <ul className="delivery_state">
//             <li>임금대기</li>
//             <p>〉</p>
//             <li>결제완료</li>
//             <p>〉</p>
//             <li>상품준비중</li>
//             <p>〉</p>
//             <li>배송중</li>
//             <p>〉</p>
//             <li>배송완료</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <nav>
//           <ul className="myPage_container">
//             <h3>나의 쇼핑정보</h3>
//             <a href="/myPage">주문배송조회</a>
//             <br></br>
//             <h3>나의 계정</h3>
//             <a href="/modify">회원정보</a>
//           </ul>
//         </nav>
//       </div>
//       <div className="delivery_info">
//         <div className="delivery_content">
//           <table id="delivery_table">
//             <thead>
//               <tr>
//                 <th>주문일</th>
//                 <th>상품명</th>
//                 <th>수량</th>
//                 <th>총 결제금액</th>
//                 <th>주문상태</th>
//               </tr>
//             </thead>
//             <tbody>
//               {uniqueOrders.map((item, index) => (
//                 <tr key={index}>
//                   <td>{new Date(item.createdAt).toLocaleDateString()}</td>
//                   <td>{item.productName}</td>
//                   <td>{item.amount}</td>
//                   <td>{item.totalPrice}원</td>
//                   <td>{item.orderStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPage;
















import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import axiosInstance from "../../utils/axios";
import Cookies from "js-cookie";

const userId = Cookies.get('userId');

const MyPage = () => {
  const [user, setUser] = useState({ name: "" });
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState({});

  useEffect(() => {
    getUser(userId);
    getOrder(userId);
  }, [userId]);

  const getUser = async (userId) => {
    try {
      const res = await axiosInstance.get(`/user/${userId}`);
      setUser(res.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getOrder = async (userId) => {
    try {
      const res = await axiosInstance.get(`/order/${userId}`);
      const orders = res.data.data;
  
      // Group orders by a combination of createdAt, totalPrice, and productId
      const groupedOrders = {};
      orders.forEach((order) => {
        const key = `${order.createdAt}-${order.totalPrice}`;
        if (!groupedOrders[key]) {
          groupedOrders[key] = order;
        }
      });
  
      // Convert the grouped object back to an array
      const uniqueOrders = Object.values(groupedOrders);
      setOrder(uniqueOrders);
      
      // Fetch product information for each productId
      const productIds = uniqueOrders.map(order => order.productId);
      const products = {};
      for (const productId of productIds) {
        const productRes = await axiosInstance.get(`/product/${productId}`);
        products[productId] = productRes.data.data.name;
      }
      setProducts(products);
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="myPage_delivery">
        <div id="myPage">
          <h2>
            어서오세요!<br /> {user.name}님 🐾
          </h2>
          <ul className="delivery_state">
            <li>임금대기</li>
            <p>〉</p>
            <li>결제완료</li>
            <p>〉</p>
            <li>상품준비중</li>
            <p>〉</p>
            <li>배송중</li>
            <p>〉</p>
            <li>배송완료</li>
          </ul>
        </div>
      </div>
      <div>
        <nav>
          <ul className="myPage_container">
            <h3>나의 쇼핑정보</h3>
              <a href="/myPage">주문배송조회</a>
            <br></br>
            <h3>나의 계정</h3>
              <a href="/modify">회원정보</a>
          </ul>
        </nav>
      </div>
      <div className="delivery_info"> 
        <div className="delivery_content">
          <table id="delivery_table">
            <thead>
              <tr>
                <th>주문일</th>
                <th>상품명</th>
                <th>결제수단</th>
                <th>총 결제금액</th>
                <th>주문상태</th>
              </tr>
            </thead>
            <tbody>
              {order && order.map((item, index) => (
                <tr key={index}>
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>{products[item.productId]}</td>
                  <td>{item.payment}</td>
                  <td>{item.totalPrice}원</td>
                  <td>{item.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPage;