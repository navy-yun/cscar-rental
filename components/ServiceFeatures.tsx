import Image from "next/image";

const features = [
  {
    id: 1,
    title: "빠른 견적",
    description: "실시간 견적 시스템으로 빠르게 확인",
    image: "/images/S_main_section2_img_01.jpg",
  },
  {
    id: 2,
    title: "대출 한도",
    description: "최대 한도까지 지원 가능",
    image: "/images/S_main_section2_img_02.jpg",
  },
  {
    id: 3,
    title: "렌트 모빌리티",
    description: "다양한 차량 선택 옵션",
    image: "/images/S_main_section2_img_03.jpg",
  },
  {
    id: 4,
    title: "지원 혜택",
    description: "고객 맞춤형 특별 혜택",
    image: "/images/S_main_section2_img_04.jpg",
  },
];

export default function ServiceFeatures() {
  return (
    <section id="service" className="py-16 md:py-24">
      <div className="wrap">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            씨에스카만의 특별함
          </h2>
          <p className="text-lg text-gray-600">
            고객님께 최고의 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group cursor-pointer">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              지금 바로 상담받으세요
            </h3>
            <p className="text-lg mb-6">
              전문 상담사가 고객님께 최적의 조건을 찾아드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1577-1065"
                className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                📞 1577-1065
              </a>
              <button className="px-6 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-colors border border-white">
                온라인 상담신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}