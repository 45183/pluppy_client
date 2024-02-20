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
        <div className="section sectionOne">
          <div className="communityImg">섹션1 communityImg</div>
          <div className="communityBanner">섹션1 communityBanner</div>
        </div>
        <div className="setion sectionTwo">
          <div className="storeBanner">섹션2 storeBanner</div>
          <div className="storeImg">섹션2 storeImg</div>
        </div>
        <div className="section sectionThree">
          <div className="sectionThreeLeft">
            <div className="leftTopText">섹션3 왼쪽위에텍스트</div>
            <div className="leftLogoImg">섹션3 왼쪽아래 로고</div>
          </div>
          <div className="sectionThreeRight">
            <div className="RightTopImg">섹션3 오른쪽위에 이미지</div>
            <div className="RightBottomImg">
              <div className="LeftAnimal">섹션3 오른쪽디브 좌측 이미지</div>
              <div className="RightAnimal">섹션3 오른쪽디브 우측 이미지</div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footerDiv"></div>
      </footer>
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