import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CarList from "@/components/CarList";
import ProcessSection from "@/components/ProcessSection";
import HistorySection from "@/components/HistorySection";
import FAQ from "@/components/FAQ";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import QuickQuote from "@/components/QuickQuote";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CarList />
        <ProcessSection />
        <HistorySection />        
        <FAQ />
        <BannerSection />
      </main>
      <Footer />
      <QuickQuote />
    </>
  );
}