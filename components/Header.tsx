"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (sectionId === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // 모바일 메뉴 닫기
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/S_top_logo.png"
              alt="씨에스카"
              width={150}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-gray-300 font-normal text-[17px] transition-colors cursor-pointer"
            >
              씨에스카
            </button>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, '#pricing')}
              className="text-white hover:text-gray-300 font-normal text-[17px] transition-colors cursor-pointer"
            >
              차량별 가격표
            </a>
            <a 
              href="#process" 
              onClick={(e) => scrollToSection(e, '#process')}
              className="text-white hover:text-gray-300 font-normal text-[17px] transition-colors cursor-pointer"
            >
              씨에스카 장점
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, '#faq')}
              className="text-white hover:text-gray-300 font-normal text-[17px] transition-colors cursor-pointer"
            >
              자주 묻는 질문
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/30">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 font-normal text-base transition-colors cursor-pointer text-left"
              >
                씨에스카
              </button>
              <a 
                href="#pricing" 
                onClick={(e) => scrollToSection(e, '#pricing')}
                className="text-white hover:text-gray-300 font-normal text-base transition-colors cursor-pointer"
              >
                차량별 가격표
              </a>
              <a 
                href="#process" 
                onClick={(e) => scrollToSection(e, '#process')}
                className="text-white hover:text-gray-300 font-normal text-base transition-colors cursor-pointer"
              >
                씨에스카 장점
              </a>
              <a 
                href="#faq" 
                onClick={(e) => scrollToSection(e, '#faq')}
                className="text-white hover:text-gray-300 font-normal text-base transition-colors cursor-pointer"
              >
                자주 묻는 질문
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}