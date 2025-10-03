"use client";

import Image from "next/image";
import { useState } from "react";
import QuoteModal from "./QuoteModal";

const cars = [
  {
    id: 1,
    name: "EV6",
    image: "/images/EV6.png",
    prices: {
      deposit30: "320,000",
      deposit30WithPrepay: "594,000", 
      noDeposit: "667,000"
    }
  },
  {
    id: 2,
    name: "그랜저",
    image: "/images/그랜저.png",
    prices: {
      deposit30: "390,000",
      deposit30WithPrepay: "579,000",
      noDeposit: "684,000"
    }
  },
  {
    id: 3,
    name: "카니발",
    image: "/images/카니발.png",
    prices: {
      deposit30: "342,000",
      deposit30WithPrepay: "501,000",
      noDeposit: "589,000"
    }
  },
  {
    id: 4,
    name: "쏘렌토 하이브리드",
    image: "/images/쏘렌토.jpg",
    prices: {
      deposit30: "368,000",
      deposit30WithPrepay: "566,000",
      noDeposit: "654,000"
    }
  },
  {
    id: 5,
    name: "캐스퍼",
    image: "/images/캐스퍼.png",
    prices: {
      deposit30: "236,000",
      deposit30WithPrepay: "305,000",
      noDeposit: "343,000"
    }
  },
  {
    id: 6,
    name: "아반떼",
    image: "/images/아반떼.png",
    prices: {
      deposit30: "255,000",
      deposit30WithPrepay: "350,000",
      noDeposit: "402,000"
    }
  },
  {
    id: 7,
    name: "BMW 520",
    image: "/images/BMW520.png",
    prices: {
      deposit30: "894,000",
      deposit30WithPrepay: "1,227,000",
      noDeposit: "1,401,000"
    }
  },
  {
    id: 8,
    name: "렉스턴스포츠칸",
    image: "/images/렉스턴.png",
    prices: {
      deposit30: "339,000",
      deposit30WithPrepay: "482,000",
      noDeposit: "557,000"
    }
  }
];

export default function CarList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuoteClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="wrap">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            차량별 참고 가격
          </h2>
          <p className="text-lg text-gray-600">
            고객님의 상황에 맞춰 최저가 견적을 만들어드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="rounded-lg overflow-hidden border border-gray-300 bg-gray-100"
            >
              {/* Car Image section with gray background */}
              <div className="p-2 pb-1">
                <div className="relative h-48">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* White background section starting from middle of car */}
              <div className="bg-white">
                <div className="px-6 pb-0 pt-4">
                  {/* Car Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {car.name}
                  </h3>
                  
                  {/* Price Table */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">선납금 30%</span>
                      <span className="text-lg font-bold">{car.prices.deposit30}원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">보증금 30%</span>
                      <span className="text-lg font-bold">{car.prices.deposit30WithPrepay}원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">무보증</span>
                      <span className="text-lg font-bold">{car.prices.noDeposit}원</span>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button - Full width without padding */}
                <button 
                  onClick={handleQuoteClick}
                  className="w-full py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium text-base"
                >
                  실시간 견적 계산하기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}