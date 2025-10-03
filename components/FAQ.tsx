"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "장기렌트란 무엇인가요",
    answer: `차량을 소유하지 않고 정해진 기간동안 임대하여 사용하는 상품입니다.
렌트사는 신차를 구입하여 이용자에게 대여를 해주며 차량의 등록비용, 자동차세, 보험료 등이 렌탈료에 모두 포함되어 있어 이용자는 정해진 기간동안 정해진 렌탈료만 납부를 하시면 됩니다.`,
  },
  {
    id: 2,
    question: "장기렌트 기간 종료 후에는 어떻게 되나요?",
    answer: `장기렌트는 계약 종료 후 차량의 인수/반납 선택이 자유롭습니다.

계약 만기 시점에 고객님께서 이용하신 차량의 상태가 좋고 더 이용하실 계획이 있으시다면 계약시점에 책정되어 있는 만기인수가를 지불하고 인수 가능합니다.
그러나 사고 등으로 차량 상태가 좋지 않거나 새로운 모델의 차량변경 등 이용을 중단하고 싶으시다면 차량을 반납하고 계약을 종료하시면 됩니다.

즉, 장기렌트는 미리 차를 이용해보고 인수를 결정하실 수 있는 신개념 자동차 이용 상품입니다.`,
  },
  {
    id: 3,
    question: "차량이 정해져 있나요?",
    answer: `렌트사에서 선구매하여 특가 적용된 프로모션 차량들을 제외하고는 원하시는 차량의 모델, 등급, 옵션, 색상 등 자유롭게 선택하실 수 있습니다.
15인승 미만의 승용, 승합차는 국내외 전차종 계약 가능하며 렉스턴스포츠, 봉고 등의 화물차는 운용리스로 계약하실 수 있습니다.`,
  },
  {
    id: 4,
    question: "운전자격 조건은 어떻게 되나요?",
    answer: `[운전가능연령] 만21세 이상
[운전자 범위]
* 개인 : 계약자 및 계약자의 직계가족+그외 운전자 추가 최대 2인 가능
* 개인사업자 : 계약자 및 계약자의 직계가족, 임직원+그외 운전자 추가 최대 2인 가능
* 법인사업자 : 임직원`,
  },
  {
    id: 5,
    question: "계약 시 재직 및 소득증빙이 필수인가요?",
    answer: `재직 및 소득증빙 없이도 가능합니다.

대부분의 렌트사가 재직 및 소득증빙은 필수이지만 렌트사별 심사 기준이 상이합니다.
그러므로 상담 요청 시 미리 말씀해주시면 재직 및 소득증빙을 하지 않아도 진행 가능한 렌트사를 선별하여 제안드리고 좋은 조건으로 심사 풀어드리도록 하겠습니다.`,
  },
  {
    id: 6,
    question: "저신용자도 가능한가요?",
    answer: `가능합니다. 재직이나 소득증빙이 불가한 경우에도 진행 가능합니다.
단, 차량가 및 신용등급, 소득수준 등에 따라 심사 결과가 달라지므로 심층상담 후 정확한 안내 가능합니다.`,
  },
  {
    id: 7,
    question: "장기렌트의 장점은?",
    answer: `1. 절세효과
세금계산서가 발급되어 렌트료를 매입비용으로 간단하게 비용 처리 가능합니다!
경차/9인승 이상의 승합차는 부가세 환급까지 가능하므로 더욱 저렴합니다!

2. 신용 관리에 유리
자동차를 대여한 것이기 때문에 신용등급의 하락이나 대출 한도에 영향을 미치지 않습니다!

3. 구입&소유비용 NO
초기 구입 시 발생하는 취등록세, 공채, 자동차세, 보험료가 발생하지 않습니다.
소유 하는 동안의 자동차세, 보험료, 건강보험료 상승 등이 발생하지 않습니다.

4. 사고 걱정 NO
24시간 콜센터 운영으로 빠른 사고처리가 가능하며 사고 시 보험료 할증, 감가상각에 대한 부담이 없습니다.
자차 사고시에도 대차 가능하여 업무 공백을 최소화 할 수 있습니다. (렌트사별 상이)`,
  },
  {
    id: 8,
    question: "보험조건은 어떻게 되나요?",
    answer: `[기본조건]

대인 무제한
대물 1억
자손 1억
무보험차상해 2억
자기차량손해면책금 30만원(국산), 50만원(수입)

가장 많이 설정되어 있는 기본 조건이며 보상한도 등 상세 조건은 변경이 가능합니다.
렌트사별 세부 조건이 모두 다르므로 상담 시 문의 주시면 자세히 안내 드리도록 하겠습니다.`,
  },
  {
    id: 9,
    question: "사고발생 시 처리는?",
    answer: `이용중인 렌트사로 사고 및 차량 이상에 대해 접수해주시면 긴급출동 또는 적절한 업무처리에 대해 안내를 받으실 수 있습니다.
고객센터로 직접 접수가 힘드실 경우 대표번호로 연락주시면 모든 업무처리 지원해드립니다.

사고에 대한 수리비용은 자기차량손해면책금으로 모두 처리 가능합니다.
업체별 차이는 있으나 평균 30만원이며 사고 횟수, 수리 비용에 상관없이 모두 면책금만으로 처리됩니다.`,
  },
  {
    id: 10,
    question: "담보금 - 보증금 / 선수금 / 보증보험 차이",
    answer: `장기렌트는 고객님의 신용만으로 차량을 임대해 드리는 상품이기 때문에 신용등급 및 소득 수준을 기준으로 렌트 이용 가능여부를 판단합니다. 이 때 차량가 (렌탈료) 대비 신용등급 및 소득 수준이 기준보다 낮을 경우 최소 담보금액을 요청드립니다.
심사 결과에 따른 최소 담보금액은 확보를 해주셔야 하며, 기준보다 높게 설정하시는 것은 가능합니다.

담보금액은 3가지 방법으로 처리 가능합니다.

1. 보증금
담보 금액을 렌탈사에 맡겨두셨다가 만기 시점에 돌려받으시는 금액입니다.
목돈을 장기간 예치해두시기 때문에 렌트사에서는 렌탈료 할인을 해드립니다.

2. 선수금
담보 금액을 렌탈료에서 차감시키는 방법으로 만기 시점에는 모두 소멸되는 비용입니다. 고정 지출을 최소화 하기 위해 선수금을 높게 설정하여 계약하시기도 합니다.

3. 보증보험
서울보증보험에서 고객님의 담보 금액을 보증해주는 대신 고객님께서는 담보금액 대비 소액의 수수료만 납부하시면 됩니다. 목돈의 지출을 최소화하여 자금 운용을 원활하게 가능합니다.`,
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50">
      <div className="wrap">
        {/* Hero Section with Background Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <Image
            src="/images/S_main_faq_01.png"
            alt="FAQ Background"
            fill
            className="object-contain"
          />          
        </div>

        {/* FAQ List Section */}
        <div className="bg-white rounded-b-2xl p-16 border border-t-0 border-gray-200">
          <div className="space-y-0 border-t border-gray-300">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-gray-300"
              >
                <button
                  className="w-full px-4 md:px-6 py-5 md:py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => toggleItem(faq.id)}
                >
                  <span className="flex items-center gap-4 text-base md:text-lg font-medium text-gray-800">
                    <span className="text-xl font-bold text-gray-600">Q.</span>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
                      openItem === faq.id ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openItem === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-gray-100 mt-2 mx-4 md:mx-6 mb-4 rounded-lg">
                      <div className="px-6 md:px-8 py-5 md:py-6">
                        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </section>
  );
}