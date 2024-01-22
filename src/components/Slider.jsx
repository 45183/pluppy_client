import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderImage() {
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
    centerMode: true, // 이미지 중앙 배치 활성화
    centerPadding: '0',
  };
    return (
        <Slider {...settings} className="slide">
      {images.map((image, index) => (
        <div key={index} className="slider" >
          <img src={image} alt={`슬라이드 이미지 ${index + 1}`} />
        </div>
      ))}
    </Slider>
    )
}
export default SliderImage;