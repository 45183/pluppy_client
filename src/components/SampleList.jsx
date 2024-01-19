import React, { useEffect, useRef, useState } from 'react';

const SampleList = () => {
  const target = useRef(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);  // 데이터를 저장할 state
  const page = useRef(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 비동기 작업 또는 API 호출을 수행
        const response = await fetch(`https://api.example.com/data?page=${page.current}`);
        const data = await response.json();

        // 받아온 데이터를 기존 데이터에 추가
        setItems((prevItems) => [...prevItems, ...data]);

        setLoading(false);
        page.current += 1;  // 페이지 증가
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          fetchData();  // Intersection이 감지되면 데이터를 불러오는 함수 호출
        }
      });
    });

    observer.observe(target.current);

    // 컴포넌트 언마운트 시에 observer 해제
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <>
      {/* 기존 데이터를 나타내는 부분 */}
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* 스크롤이 가능한 높이를 갖는 초록색 박스 */}
      <div style={{ height: "1000px", backgroundColor: "green" }} ></div>
      
      {/* IntersectionObserver의 대상이 될 빨간색 박스 */}
      <div id="scrollEnd" style={{ height: "20px", backgroundColor: "red" }} ref={target}></div>
    </>
  );
};

export default SampleList;
