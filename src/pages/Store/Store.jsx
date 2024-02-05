import "./Store.css";
import ProductDetail from '../../components/Product/ProductDetail';
import Header from "../../components/Header/Header"
import { SliderImage } from "../Main/Main";
const Store = () => {
  return (
    <div className="product_content">
        <Header />
        <SliderImage />
      <div className="category">
        <ul>
          <li><a href='/store'>전체</a></li>
          <li><a href='/dog'>강아지</a></li>
          <li><a href='/cat'>고양이</a></li>
        </ul>
      </div>
      <ProductDetail />
    </div>
  );
}

export default Store;
