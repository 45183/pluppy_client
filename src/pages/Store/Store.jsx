import Header from "../../components/common/Header/Header"
import SliderImage from "../../components/Slider/Slider"
import Product from "../../components/Product/Product"
import './Store.css'
const Store = () => {
    return (
        <div className="store">
        <Header />
        <SliderImage />
        <Product />
        </div>
    )
}
export default Store;