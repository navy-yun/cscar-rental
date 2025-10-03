"use client";

import Image from "next/image";
import { useState } from "react";

export default function BannerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/S_main_banner_01.png"
              alt="배너 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/S_main_banner_02.png"
              alt="배너 2"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Bottom CTA - Moved outside grid and centered */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={openModal}
            className="px-10 py-4 bg-blue-900 text-white font-bold text-lg rounded-full hover:bg-blue-950 transition-colors shadow-lg"
          >
            대출성 금융상품판매대리·중개업자 등록증
          </button>
        </div>

        {/* 모달 */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* 백드롭 */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* 모달 컨테이너 */}
            <div className="relative bg-white rounded-lg shadow-2xl max-w-[600px] w-full max-h-[90vh] overflow-hidden animate-modalSlideUp">
              {/* 헤더 */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-bold">대출성 금융상품판매대리·중개업자 등록증</h3>
                <button
                  onClick={closeModal}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* 이미지 컨테이너 */}
              <div className="relative w-full h-[600px] overflow-auto">
                <Image
                  src="/images/S_page_img.png"
                  alt="대출성 금융상품판매대리·중개업자 등록증"
                  width={600}
                  height={840}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}