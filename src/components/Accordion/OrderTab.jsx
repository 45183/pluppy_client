import React, { useState } from "react";

const OrderTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "[주문/결제] Q. 네이버페이로 주문하고 싶어요!",
      answer: "첫 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[주문/결제] Q. 꼭 회원가입을 해야만 주문이 가능한가요?",
      answer: "두 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[주문/결제] Q. 주문을 취소했는데 언제 환불되나요?",
      answer: "세 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[주문/결제] Q. 주문 취소는 어떻게 하나요?",
      answer: "네 번째 답변이 여기에 있습니다.",
    },
  ];

  return (
    <div className="accordion-faq">
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderTab;
