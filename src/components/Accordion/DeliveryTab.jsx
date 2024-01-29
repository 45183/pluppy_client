import React, { useState } from "react";

const DeliveryTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "[배송관련] Q. 배송지 주소(또는 연락처)를 변경하고 싶어요.",
      answer: "첫 번째 답변이 여기에 있습니다.",
    },
    {
      question:
        "[배송관련] Q. 배송 요청 메시지, 주소 변경 요청이 적용되지 않았어요.",
      answer: "두 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[배송관련] Q. 배송조회는 어떻게 하나요 ?",
      answer: "세 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[배송관련] Q. 배송이 보통 얼마나 걸리나요 ?",
      answer: "세 번째 답변이 여기에 있습니다.",
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

export default DeliveryTab;
