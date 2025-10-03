"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const processes = [
  {
    id: 1,
    number: "1",
    title: "정확한 분석",
    description: "고객님의 신용 및 자금 상황을\n정확하게 분석합니다.",
    image: "/images/S_main_section2_img_01.jpg",
  },
  {
    id: 2,
    number: "2", 
    title: "차량 확보",
    description: "전국 모든 재고를 확인하여\n고객님의 희망 차량을 확보합니다.",
    image: "/images/S_main_section2_img_02.jpg",
  },
  {
    id: 3,
    number: "3",
    title: "가격 비교",
    description: "국내 모든 대기업 및 무실사 렌트 상품\n최저가 가격을 비교합니다.",
    image: "/images/S_main_section2_img_03.jpg",
  },
  {
    id: 4,
    number: "4",
    title: "계약 진행",
    description: "고객님 맞춤 최저가 견적으로\n계약을 진행합니다.",
    image: "/images/S_main_section2_img_04.jpg",
  },
];

export default function ProcessSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Domino effect animation
            processes.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200); // 200ms delay between each card
            });
          }
        });
      },
      { threshold: 0.3 }
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
    <section id="process" className="relative py-12 md:py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            씨에스카가
            <br />
            최저가 계약이 가능한 이유!
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            신차 장기렌트&리스의 새로운 기준! 씨에스카만 가능합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className={`
                bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-700
                ${visibleCards.includes(index) 
                  ? "translate-x-0 opacity-100 scale-100" 
                  : "-translate-x-full opacity-0 scale-95"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card image with padding */}
              <div className="p-3 md:p-4">
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed whitespace-pre-line">
                  {process.description}
                </p>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}