import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutSnippet from "@/components/sections/AboutSnippet";
import ProductsGrid from "@/components/sections/ProductsGrid";
import WhyVVJ from "@/components/sections/WhyVVJ";
import CertificationsStrip from "@/components/sections/CertificationsStrip";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar /> 
      <AboutSnippet />
      <ProductsGrid />
      <WhyVVJ />
      <CertificationsStrip />
      <ContactCTA />
    </>
  );
}