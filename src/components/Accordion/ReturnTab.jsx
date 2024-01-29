import React, { useState } from "react";
const ReturnTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "[교환/반품] Q. 교환 및 반품 절차가 어떻게 되나요?",
      answer: "첫 번째 답변이 여기에 있습니다.",
    },
    {
      question:
        "[교환/반품] Q. 네이버페이에서 구매 후 반품했는데 환불이 안 되고 있어요.",
      answer: "두 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[교환/반품] Q. 반품 신청했는데 언제 환불 되나요?",
      answer: "세 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[교환/반품] Q. 교환 반품 처리 기간은 얼마나 소요 되나요?",
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

export default ReturnTab;
