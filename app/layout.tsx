import type { Metadata } from "next";
import "./globals.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "씨에스카",
  description: "즉시출고,장기렌트카가격비교, 특판 가격으로 저렴하게, 무료 1대1 맞춤 이벤트, 법인 개인 사업자. 보증금없는 수입차 국산차 무보증 초기비용",
  openGraph: {
    title: "씨에스카",
    description: "즉시출고,장기렌트카가격비교, 특판 가격으로 저렴하게, 무료 1대1 맞춤 이벤트, 법인 개인 사업자. 보증금없는 수입차 국산차 무보증 초기비용",
    images: ["/images/S_top_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-noto">{children}</body>
    </html>
  );
}
