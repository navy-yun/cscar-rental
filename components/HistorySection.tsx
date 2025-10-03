"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// 왼쪽 열 (최신년도부터)
const leftColumnData = [
  {
    year: "2024년",
    events: [
      "장기렌트,리스 누적판매 48,000대 달성",
      "모범기업 표창 9년연속 수상기록"
    ]
  },
  {
    year: "2023년",
    events: [
      "장기렌트,리스 누적판매 40,000대 달성",
      "모범기업 표창수여",
      "현대캐피탈 최우수 AG선정"
    ]
  },
  {
    year: "2022년",
    events: [
      "장기렌트,리스 누적판매 30,000대 달성",
      "모범기업 표창수여",
      "현대캐피탈 최우수 AG 선정"
    ]
  },
  {
    year: "2021년",
    events: [
      "장기렌트,리스 누적판매 20,000대 달성",
      "모범기업 표창수여",
      "현대캐피탈 최우수 AG 선정",
      "SK 렌터카 최우수 AG 선정"
    ]
  },
  {
    year: "2020년",
    events: [
      "장기렌트, 리스 누적판매 15,000대 달성",
      "전국 렌터카 연합 오토윈 설립",
      "SK 렌터카 최우수 AG 선정",
      "현대캐피탈 최우수 AG 선정"
    ]
  },
  {
    year: "2019년",
    events: [
      "장기렌트,리스 월 평균 판매 250대 달성",
      "롯데렌트카 우수 AG 선정",
      "JB 우리캐피탈 우수 AG 선정",
      "SK 렌터카 전국 AG 선정"
    ]
  }
];

// 오른쪽 열 (오래된 년도부터 최신으로)
const rightColumnData = [
  {
    year: "2018년",
    events: [
      "장기렌트,리스 판매 월평균 판매 200대 달성",
      "롯데렌트카 전국 최우수 SP 선정",
      "현대캐피탈 전국 최우수 SP 선정",
      "신한카드 전국 최우수 SP 선정"
    ]
  },
  {
    year: "2017년",
    events: [
      "장기렌트,리스 판매 월평균 판매 150대 달성",
      "롯데렌트카 전국 최다판매 2년연속 AG 수상",
      "신한카드 렌터카 전국최우수 AG 선정",
      "JB 우리캐피탈 렌터카 전국최우수 AG 선정",
      "BNK 캐피탈, 하나캐피탈, 아주캐피탈, 한진렌트카, AJ 렌터카 제휴"
    ]
  },
  {
    year: "2016년",
    events: [
      "장기렌트 전문기업으로 성장",
      "롯데렌트카 전국 최다 판매 AG수상",
      "신한카드 렌터카 전국최우수 AG 선정",
      "JB 우리캐피탈, 신한카드렌트, 제휴"
    ]
  },
  {
    year: "2015년",
    events: [
      "(주)씨에스카 법인 업체 설립 장기렌트, 리스 전문기업 출범"
    ]
  },
  {
    year: "2014년",
    events: [
      "삼인장기렌트 업체 설립"
    ]
  }
];

export default function HistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="bg-white relative overflow-hidden py-8 md:py-16" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with logo and description */}
        <div className="relative rounded-t-2xl overflow-hidden border border-b-0 border-gray-200">
          {/* Background image with dark overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/rental.jpeg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>
          
          {/* Content */}
          <div className="relative flex flex-col lg:flex-row p-8 md:p-16">
            {/* Left side - Logo */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center mb-6 lg:mb-0">
              <Image
                src="/images/S_top_logo.png"
                alt="씨에스카"
                width={200}
                height={60}
                className="h-16 md:h-20 w-auto mb-3 md:mb-4"
              />
              <p className="text-white text-xs md:text-sm">신차장기렌트 | 즉시출고 | 전국서비스</p>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:w-1/2 flex items-center lg:justify-end">
              <div className="bg-white rounded-xl p-4 md:p-8 w-full lg:max-w-xl">
                <p className="text-gray-700 leading-relaxed text-xs md:text-base mb-3 md:mb-6">
                  고객님의 도움으로 어느덧 설립 11주년이 지나,<br />
                  500,000명 이상의 고객님과 함께 하고 있습니다.<br />
                  지금 회사를 믿고 선택해주신<br />
                  많은 분들께 머리숙여 감사의 말씀을 드립니다.<br />
                  <br />
                  고객님께서 차량을 이용하시는 동안<br />
                  &ldquo;처음과 같이 완결같은 모습&rdquo;을 약속 드리며,<br />
                  모든 임직원과 노력으로 보답드리겠습니다.
                </p>
                
                <div className="pt-3 md:pt-6 border-t border-gray-300">
                  <p className="text-sm md:text-lg font-medium text-gray-800">주식회사 씨에스카</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-b-2xl px-4 md:px-20 lg:px-32 py-8 md:py-16 pb-10 md:pb-20 border border-t-0 border-gray-200 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 relative">
            {/* Left Column */}
            <div>
              {leftColumnData.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    marginBottom: index < leftColumnData.length - 1 ? '3rem' : '0'
                  }}
                  className="mb-12 md:mb-0"
                >
                  <div className="flex items-start">
                    {/* Timeline line container */}
                    <div className="relative mr-4 md:mr-8" style={{ width: '12px' }}>
                      {/* Point */}
                      <div className="absolute top-1 md:top-2 left-0 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full z-10"></div>
                      {/* Line extending down */}
                      {index < leftColumnData.length - 1 && (
                        <div 
                          className="absolute left-[3px] md:left-[5px] top-[0.4rem] md:top-3 w-[2px] bg-gray-300"
                          style={{
                            height: `calc(${item.events.length * 2}rem + 7.5rem)`
                          }}
                        />
                      )}
                      {/* Last item line extends with space from bottom */}
                      {index === leftColumnData.length - 1 && (
                        <div 
                          className="absolute left-[3px] md:left-[5px] top-[0.4rem] md:top-3 w-[2px] bg-gray-300"
                          style={{
                            height: `calc(${item.events.length * 2}rem + 5rem)`
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 -mt-1">
                      <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">{item.year}</h3>
                      <ul className="space-y-2 md:space-y-3">
                        {item.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="text-gray-700 text-xs md:text-lg leading-relaxed">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="mt-12 md:mt-0">
              {rightColumnData.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ 
                    transitionDelay: `${(index + 6) * 100}ms`,
                    marginBottom: index < rightColumnData.length - 1 ? '3rem' : '0'
                  }}
                  className="mb-12 md:mb-0"
                >
                  <div className="flex items-start">
                    {/* Timeline line container */}
                    <div className="relative mr-4 md:mr-8" style={{ width: '12px' }}>
                      {/* Point */}
                      <div className="absolute top-1 md:top-2 left-0 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full z-10"></div>
                      {/* Line extending down */}
                      {index < rightColumnData.length - 1 && (
                        <div 
                          className="absolute left-[3px] md:left-[5px] top-[0.4rem] md:top-3 w-[2px] bg-gray-300"
                          style={{
                            height: `calc(${item.events.length * 2}rem + 7.5rem)`
                          }}
                        />
                      )}
                      {/* Last item line extends with space from bottom */}
                      {index === rightColumnData.length - 1 && (
                        <>
                          {/* Mobile */}
                          <div 
                            className="absolute left-[3px] top-[0.4rem] w-[2px] bg-gray-300 md:hidden"
                            style={{
                              height: `calc(${item.events.length * 2}rem + 3rem)`
                            }}
                          />
                          {/* Desktop */}
                          <div 
                            className="absolute left-[5px] top-3 w-[2px] bg-gray-300 hidden md:block"
                            style={{
                              height: `calc(${item.events.length * 2}rem + 22.5rem)`
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="flex-1 -mt-1">
                      <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">{item.year}</h3>
                      <ul className="space-y-2 md:space-y-3">
                        {item.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="text-gray-700 text-xs md:text-lg leading-relaxed">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}