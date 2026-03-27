import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AccueilSection from "@/components/AccueilSection";
import HistoriqueSection from "@/components/HistoriqueSection";
import BureauxSection from "@/components/BureauxSection";
import SallesSection from "@/components/SallesSection";
import SituationSection from "@/components/SituationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export default function Index() {
  useScrollToHash();

  return (
    <>
      <Navbar />
      <HeroSection />
      <AccueilSection />
      <HistoriqueSection />
      <BureauxSection />
      <SallesSection />
      <SituationSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
