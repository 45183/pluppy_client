import "./Main.css"
import Header from "../../components/Header/Header";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Main() {
  return (
    <div>
      <Header />
      <div className="slide_container"><SliderImage /></div>
      <section>
        <div className="sectionOne">
          <div className="communityImg"></div>
          <div className="communityBanner"></div>
        </div>
        <div className="sectionTwo">
          <div className="storeImg"></div>
          <div className="storeBanner"></div>
        </div>
        <div className="sectionThree"></div>
      </section>
    </div>
  )
}
export const SliderImage = () => {
  const images = [
    "./images/slide1.png",
    "./images/slide2.png",
    "./images/slide3.png",
    "./images/slide4.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0',
  };
  return (
    <Slider {...settings} className="slide">
      {images.map((image, index) => (
        <div key={index} className="slide_img" >
          <img src={image} alt={`슬라이드 이미지 ${index + 1}`} />
        </div>
      ))}
    </Slider>
  )
}
export default Main;