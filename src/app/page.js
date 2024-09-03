import HeaderScreen from "@/sections/header/HeaderScreen";
import HeroSection from "@/sections/hero/HeroSection";

export default function Home() {
  return (
    <div className="no-scrollbar">
      <HeaderScreen />
      <HeroSection />
    </div>
  );
}
