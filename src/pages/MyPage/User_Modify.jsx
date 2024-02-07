import React, { useState, useRef } from "react";
import Header from "../../components/Header/Header";
import "./User_Modify.css";

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

const Modify = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="modify">
        <div className="modify_container">
          <h2>회원정보</h2>
          <ImageUploadComponent />
          <form className="modify_form">
            <div>
              <p>
                닉네임{" "}
                <input type="text" value={name} onChange={handleNameChange} />
              </p>
            </div>
            <div>
              <p>
                이메일{" "}
                <input type="text" value={email} onChange={handleEmailChange} />
              </p>
            </div>
            <div>
              <p>
                전화번호{" "}
                <input type="text" value={phone} onChange={handlePhoneChange} />
              </p>
            </div>
            <div>
              <p>
                배송주소{" "}
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                />
              </p>
            </div>
          </form>
          <button className="modify_btn" type="submit">
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modify;
