import "../styles/Main.css"
import Header from "../components/common/Header/Header";
import SliderImage from "../components/Slider";
function Main(){
   return (
      <div>
      <Header/>
      <SliderImage />
     <section> 
      <div className="sectionOne="></div>
      <div className="sectionTwo"></div>
      <div className="sectionThree"></div>
      </section>
      </div>
   )
}

export default Main;