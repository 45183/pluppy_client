import React, { useState } from "react";

const OtherTab = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "[기타문의] Q. 회원정보 수정은 어떻게 하나요?",
      answer: "첫 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[기타문의] Q. 오프라인 매장은 없나요?",
      answer: "두 번째 답변이 여기에 있습니다.",
    },
    {
      question: "[기타문의] Q. 현금영수증 신청은 어떻게 하나요?",
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

export default OtherTab;
