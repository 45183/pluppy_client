import { useState } from "react";
import "./ProductRegistration.css"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import AdminHeader from "../Admin_Header"



// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
];


// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
];

const modules = {
    toolbar: {
        container: toolbarOptions,
    },
};

const ProductRegistration = () => {
    const [productName, setProductName] = useState('');
    const [isVisible, setIsVisible] = useState(true); // 변경: 상태명 오타 수정
    const [sellingPrice, setSellingPrice] = useState('');
    const [discountRate, setDiscountRate] = useState('');
    const [finalPrice, setFinalPrice] = useState('');
    const [stock, setStock] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [detailImage, setDetailImage] = useState([]);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleVisibilityToggle = () => { // 변경: 함수명 수정
        setIsVisible(!isVisible); // 변경: 상태값 반전
    };

    const handleSellingPriceChange = (e) => {
        setSellingPrice(e.target.value);
    };

    const handleDiscountRateChange = (e) => {
        setDiscountRate(e.target.value);
    };

    const handleStockChange = (e) => {
        setStock(e.target.value);
    };

    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.value);
    };

    const handleDetailImagesChange = (e) => {
        const files = e.target.files;
        setDetailImage(Array.from(files));
    };

    const handleSubmit = () => {
        // 여기에 폼 제출 로직 추가
    };



    return (
        <>
            <AdminHeader />
            <div className="registration">
                <div className="productRegistration">
                    <h3>상품등록</h3>
                    <table className="registrationBox">
                        <tr>
                            <th>분류</th>
                            {/* 1.상품 1차 2차 목록 */}
                            <td className="classification"
                            >

                                <select>
                                    <optgroup label="강아지">
                                        <option value="장난감">장난감</option>
                                        <option value="사료">사료</option>
                                        <option value="간식">간식</option>
                                        <option value="옷">옷</option>
                                        <option value="용품">용품</option>
                                    </optgroup>
                                    <optgroup label="고양이">
                                        <option value="장난감">장난감</option>
                                        <option value="사료">사료</option>
                                        <option value="간식">간식</option>
                                        <option value="옷">옷</option>
                                        <option value="용품">용품</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            {/* 2.상품명 */}
                            <th>상품명</th>
                            <td>
                                <input type="text" value={productName} onChange={handleProductNameChange}
                                    className="text" />
                            </td>
                        </tr>

                        {/* <tr>
                        3.페이지 노출 여부
                        <th>페이지 노출 여부</th>
                        <td>
                            <input type="checkbox" className="btn" checked={isVisible} onChange={handleVisibilityToggle} />&nbsp;&nbsp;ON&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" className="btn"
                                checked={!isVisible} onChange={handleVisibilityToggle} />&nbsp;&nbsp;OFF
                        </td>
                    </tr> */}

                        <tr>
                            {/* 4.판매 가격 */}
                            <th>판매 가격</th>
                            <td>
                                <input type="text" value={sellingPrice} onChange={handleSellingPriceChange}
                                    className="text" />
                            </td>
                        </tr>

                        {/* <tr>
                         5. 할인율
                        <th>할인율</th>
                        <td>
                            <input type="text" value={discountRate} onChange={handleDiscountRateChange} />
                        </td>
                    </tr>

                    <tr>
                        6. 할인된 최종 가격
                        <th>할인된 최종 가격</th>
                        <td>
                            <span>{finalPrice}</span>
                        </td>
                    </tr> */}

                        <tr>
                            {/* 7. 재고 */}
                            <th>재고</th>
                            <td>
                                <input type="text" value={stock} onChange={handleStockChange}
                                    className="text" />
                            </td>
                        </tr>

                        <tr>
                            {/* 8. 썸네일 첨부 버튼 */}
                            <th>썸네일 첨부</th>
                            <td>
                                <input type="file" accept="image/*" onChange={handleThumbnailChange}
                                />
                            </td>
                        </tr>


                        {/* 9. 상품 상세이미지 추가 버튼 */}
                        <div className="quill">
                            <ReactQuill
                                style={{ height: "500px" }}
                                theme="snow"
                                modules={modules}
                            />
                        </div>

                    </table>

                    {/* Submit 버튼 */}
                    <button className="upload" onClick={handleSubmit}>등록하기</button>
                </div>
            </div>
        </>
    );
};

export default ProductRegistration;
