import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import "../FAQ/FAQ.css";
const FAQ = () => {
  return (
    <div>
      <Header />
      <div className="FAQ_title">
        <h2>FAQ</h2>
      </div>
      <Accordion />
    </div>
  );
};
export default FAQ;
