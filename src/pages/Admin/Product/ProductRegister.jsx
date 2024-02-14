import React, { useState } from 'react'
import axiosInstance from '../../../utils/axios';
import { useNavigate } from 'react-router';

const ProductRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    // const formRef = useRef(null);

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
        setCategory(e.target.value);
    };
    const onChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        try{
            let formData = new FormData();
            formData.append('image', image);

            const res = await axiosInstance.post('/product/image', formData);
            console.log(res.data)
            const productData = {
                name: name,
                price: price,
                stock: stock,
                description: description,
                categoryId: category,
                image1: res.data.imagePath
            };

            await axiosInstance.post('/product/createProduct', productData);
            navigate('/product');
        } catch(error){
            console.error(error)
        }
    }
    // const onSubmit = async(e) => {
    //     e.preventDefault();
    //     try{
    //         await axiosInstance.post('/product/createProduct', {name:name, price:price, stock:stock, description:description, categoryId: category, image1:image})
    //         navigate('/product');
    //     } catch(error){
    //         console.error(error)
    //     }
    // }

    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const formData = new FormData();
    //         formData.append('name', name);
    //         formData.append('price', price);
    //         formData.append('stock', stock);
    //         formData.append('description', description);
    //         formData.append('categoryId', category);
    //         formData.append('image1', image);

    //         formRef.current.reset()

    //         // 서버로 이미지 업로드 요청
    //         const response = await axios.post('http://localhost:5000/product/createProduct', formData, {withCredentials:true,
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });

    //         // 서버에서 응답 받은 후의 동작 (예: 페이지 이동 등)
    //         console.log(response.data);
    //         navigate('/product');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    const selectOptions1 = {11:"장난감", 12:"사료", 13:"간식", 14:"옷", 15:"용품"}
    const selectOptions2 = {21:"장난감", 22:"사료", 23:"간식", 24:"옷", 25:"용품"}



  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>상품명</label>
            <input type='text' value={name} onChange={onChangeName} />
            <label>카테고리</label>
            <select value={category} onChange={onChangeCategory}>
                <optgroup label='강아지'>
                    {Object.entries(selectOptions1).map(([key, value]) => (
                        <option value={key}>{value}</option>
                    ))}
                </optgroup>
                <optgroup label='고양이'>
                {Object.entries(selectOptions2).map(([key, value]) => (
                        <option value={key}>{value}</option>
                    ))}
                </optgroup>
            </select>
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



