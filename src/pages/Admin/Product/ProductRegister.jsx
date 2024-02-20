import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axios';
import { useNavigate } from 'react-router';

const ProductRegister = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [mainCategoryId, setMainCategoryId] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');
    const [image, setImage] = useState(null);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [selectOptions, setSelectOptions] = useState({});

    useEffect(() => {
        // 각 주요 카테고리에 대한 하위 카테고리 옵션 설정
        setSelectOptions({
            1: {11: "장난감", 12: "사료", 13: "간식", 14: "옷", 15: "용품"},
            2: {21: "장난감", 22: "사료", 23: "간식", 24: "옷", 25: "용품"}
        });
    }, []);

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangePrice = (e) => {
        setPrice(e.target.value);
    };
    const onChangeStock = (e) => {
        setStock(e.target.value);
    };
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };
    const onChangeCategory = (e) => {
        const mainCategoryValue = e.target.value;
        setMainCategoryId(mainCategoryValue);

        if (mainCategoryValue !== "") {
            setShowSubCategory(true);
        } else {
            setShowSubCategory(false);
        }
    };
    const onChangeSubCategory = (e) => {
        const subCategoryValue = e.target.value;
        setSubCategoryId(subCategoryValue);
    };
    const onChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('image', image);

            const res = await axiosInstance.post('/admin/image', formData);
            console.log(res.data);

            const productData = {
                name: name,
                price: price,
                stock: stock,
                description: description,
                mainCategoryId: mainCategoryId,
                subCategoryId: subCategoryId,
                image1: res.data.imagePath
            };

            await axiosInstance.post('/admin/product/createProduct', productData);
            navigate('/product');
        } catch (error) {
            console.error(error);
        }
    }

    const mainCategory = {1: "강아지", 2: "고양이"};

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>상품명</label>
                <input type='text' value={name} onChange={onChangeName} />
                <label>주요 카테고리</label>
                <select id="mainCategorySelect" value={mainCategoryId} onChange={onChangeCategory}>
                    <option value="">주요 카테고리를 선택하세요</option>
                    {Object.keys(mainCategory).map((key) => (
                        <option key={key} value={key}>{mainCategory[key]}</option>
                    ))}
                </select>

                {showSubCategory && (
                    <>
                        <label>하위 카테고리</label>
                        <select id="subCategorySelect" value={subCategoryId} onChange={onChangeSubCategory}>
                            <option value="">하위 카테고리를 선택하세요</option>
                            {Object.entries(selectOptions[mainCategoryId]).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                    </>
                )}
            <label>가격</label>
            <input type='number' value={price} onChange={onChangePrice}/>
            <label>재고</label>
            <input type='number' value={stock} onChange={onChangeStock}/>
            <label>설명</label>
            <input type='text' value={description} onChange={onChangeDescription}/>
            <label>상품사진</label>
            <input type='file'onChange={onChangeImage}/>
            <button type='submit'>등록하기</button>
        </form>
    </div>
  )
}

export default ProductRegister



