import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="container mx-auto px-20 py-10">
        <div className="flex flex-col items-start space-y-3">
          {/* Logo */}
          <Image
            src="/images/S_top_logo.png"
            alt="씨에스카"
            width={120}
            height={32}
            className="h-8 w-auto brightness-0 invert mb-2"
          />
          
          {/* Company Info */}
          <div className="space-y-1 text-left">
            <p>
              상호 : 주식회사 씨에스카 · 대표 : 김봉석 · 사업자등록번호 : 681-86-00201 · 통신판매업신고 : 제217-인천남동구-0334호 · 번역 : 1600-6951 · 메일 : cscar10%@naver.com
            </p>
            <p>
              본사 : 인천광역시 남동구 선수촌공원로 9 구월테크노밸리 8층 306호 씨에스카
            </p>
            <p>
              대구 : 경북지시 : 경북 포항시 남구 연일읍 형산강로 8
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}