import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./User_Modify.css";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import axiosInstance from "../../utils/axios";
import Cookies from "js-cookie";

const userId = Cookies.get('userId');


const Modify = () => {

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axiosInstance.get(`/user/${userId}`);
      setUser(res.data.data);
      console.log(res.data.data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    };
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="modify">
        <div className="modify_container">
          <h2>회원정보</h2>
          <ImageUploadComponent />
          <div>
            <p id="user_info">
              닉네임{" "}
              {user.name}
            </p>
          </div>
          <div>
            <p id="user_info">
              이메일{" "}
              {user.email}
            </p>
          </div>
          <div>
            <p id="user_info">
              전화번호{" "}
              {user.phone}
            </p>
          </div>
          <div className="address_box">
          <Address_info user={user}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Address_info(user) {
  const [zipCode, setZipcode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const completeHandler = (data) => {
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "800px",
      height: "600px",
      padding: "0",
      overflow: "hidden",
    },
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // 상세 주소검색 event
  const changeHandler = (event) => {
    setDetailAddress(event.target.value);
  };

  // 추가
  const clickHandler = () => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
    } else {
      console.log(zipCode, roadAddress, detailAddress);
    }
  };
  return (
    <div>
      <p id="address_info">
      <div id="address">배송지</div>
      <input id='address_num' value={zipCode} readOnly placeholder="우편번호" />
         <button id="address_search" onClick={toggle}>
          우편번호
        </button>
        <br />
        <input id='address_name' value={roadAddress} readOnly placeholder="도로명 주소" />
        <br />
        <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
          <DaumPostcode onComplete={completeHandler} height="100%" />
        </Modal>
        <input
          type="text"
          id='address_name'
          onChange={changeHandler}
          value={detailAddress}
          placeholder="상세주소"
        />
        <br />
      </p>
    </div>
  );
}
export default Modify;

const ImageUploadComponent = () => {
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef(null);

  const handleFileInputChange = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    event.stopPropagation();
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setImageURL(imageURL);
    }
  };

  const handleImageClick = () => {
    handleFileInputChange();
  };

  return (
    <div className="modify_Img">
      <div className="fileInputFrame">
        <label className="fileButton" htmlFor="fileInput">
          {imageURL ? (
            <img
              className="uploadedImage"
              src={imageURL}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
              onClick={handleImageClick}
            />
          ) : null}
        </label>
      </div>
      <div className="fileInput">
        <input
          id="fileInput"
          className="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};
