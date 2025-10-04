import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-xs md:text-sm pb-16 md:pb-0">
      <div className="container mx-auto px-4 md:px-20 py-8 md:py-10">
        <div className="flex flex-col items-start space-y-3">
          {/* Logo */}
          <Image
            src="/images/S_top_logo.png"
            alt="씨에스카"
            width={120}
            height={32}
            className="h-6 md:h-8 w-auto brightness-0 invert mb-2"
          />
          
          {/* Company Info */}
          <div className="space-y-1 text-left">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-x-2 gap-y-1">
              <span>상호 : 주식회사 씨에스카</span>
              <span className="hidden md:inline">·</span>
              <span>대표 : 김봉석</span>
              <span className="hidden md:inline">·</span>
              <span>사업자등록번호 : 681-86-00201</span>
              <span className="hidden md:inline">·</span>
              <span>통신판매업신고 : 제217-인천남동구-0334호</span>
              <span className="hidden md:inline">·</span>
              <span>전화 : 1600-6951</span>
              <span className="hidden md:inline">·</span>
              <span>메일 : cscar10%@naver.com</span>
            </div>
            <p className="break-words">
              본사 : 인천광역시 남동구 선수촌공원로 9 구월테크노밸리 8층 306호 씨에스카
            </p>
            <p className="break-words">
              대구 : 경북 포항시 남구 연일읍 형산강로 8
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}