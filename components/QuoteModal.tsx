"use client";

import { useState, useEffect } from "react";
import { submitQuote } from "@/lib/supabase";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carName: "",
    region: "",
    privacyAgree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.carName || !formData.region) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }
    
    if (!formData.privacyAgree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitQuote({
        name: formData.name,
        phone: formData.phone,
        car_name: formData.carName,
        region: formData.region,
        privacy_agree: formData.privacyAgree,
      });
      
      if (result.success) {
        alert(`${formData.name}님의 견적 요청이 성공적으로 접수되었습니다.\n담당자가 빠른 시일 내에 연락드리겠습니다.`);
        
        // 폼 초기화
        setFormData({
          name: "",
          phone: "",
          carName: "",
          region: "",
          privacyAgree: false,
        });
        
        setTimeout(() => {
          onClose();
        }, 500);
      } else {
        alert(result.error || '견적 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('견적 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* 백드롭 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-[500px] w-[90%] mx-4 animate-modalSlideUp">
        {/* 헤더 */}
        <div className="relative bg-gray-50 px-6 py-5 border-b">
          <h2 className="text-xl font-bold text-center text-gray-900">
            실시간 무료 견적 서비스 받기
          </h2>
          <p className="text-sm text-gray-600 text-center mt-1">
            전문가가 직접 빠르게, 정확하게, 합계 상담해 드립니다. 
            <span className="text-blue-600 font-medium"> 개인정보는 상담이용 100% 파기됩니다.</span>
          </p>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="휴대폰번호(필수)"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              placeholder="차량명"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              placeholder="지역"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacyAgree"
              name="privacyAgree"
              checked={formData.privacyAgree}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="privacyAgree" className="text-sm text-gray-700">
              개인정보 수집에 동의합니다. 
              <a href="#" className="text-blue-600 hover:underline ml-1">[내용보기]</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-md transition-colors font-medium text-lg ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {isSubmitting ? '처리 중...' : '실시간 견적 계산하기'}
          </button>
        </form>
      </div>
    </div>
  );
}