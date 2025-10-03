"use client";

import { useState } from "react";
import { submitQuote } from "@/lib/supabase";

export default function QuickQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carName: "",
    region: "",
    privacyAgree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      } else {
        alert(result.error || '견적 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
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

  const handlePhoneCall = () => {
    window.location.href = "tel:1600-6951";
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[1000]">
      <div className={`flex transition-all duration-300 ease-in-out ${isOpen ? '' : ''}`}>
        {/* 탭 버튼 - 항상 표시 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            bg-gray-900 text-white px-2 py-2 text-sm font-medium
            transition-all duration-300
            ${isOpen ? '' : 'rounded-l-lg'}
          `}
          style={{ 
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            height: '120px',
            letterSpacing: '0.15em'
          }}
        >
          빠른견적문의
        </button>

        {/* 폼 컨테이너 - 토글 */}
        <div 
          className={`
            bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? 'w-[220px] opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <div className="p-4 w-[220px]">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              실시간 무료견적 문의
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="성명"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="전화번호(필수/숫자만 입력)"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="carName"
                  value={formData.carName}
                  onChange={handleChange}
                  placeholder="차량명"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder="지역"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-xs"
                />
              </div>

              <div className="flex items-start gap-2 py-2">
                <input
                  type="checkbox"
                  id="quickPrivacyAgree"
                  name="privacyAgree"
                  checked={formData.privacyAgree}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="quickPrivacyAgree" className="text-xs text-gray-700">
                  개인정보 수집에 동의 
                  <a href="#" className="text-blue-600 hover:underline ml-1">[보기]</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 rounded-md transition-colors font-medium text-xs ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? '처리 중...' : '무료 견적 서비스 받기'}
              </button>
            </form>

            {/* 전화 상담 버튼 */}
            <button
              onClick={handlePhoneCall}
              className="w-full mt-3 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-xs flex items-center justify-center gap-1"
            >
              <span className="text-[10px]">대표전화</span>
              <span className="font-bold text-sm">1600-6951</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}