import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-auto md:h-screen md:min-h-[700px] overflow-hidden">
      {/* Mobile Image */}
      <div className="block md:hidden relative">
        <Image
          src="/images/S_main_img_01.png"
          alt="Hero Background"
          width={1920}
          height={1080}
          className="w-full h-auto"
          style={{ marginTop: '10%' }}
          priority
        />
      </div>
      
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/S_main_img_01.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
    </section>
  );
}