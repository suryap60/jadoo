import { HeroSection } from "../components/sections/HeroSection";
import { CategorySection } from "../components/sections/CategorySection";
import { DestinationsSection } from "../components/sections/DestinationsSection";
import { BookSection } from "../components/sections/BookSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { LogoSection } from "../components/sections/LogoSection";
import { SubscriptionSection } from "../components/sections/SubscriptionSection";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <CategorySection />
      <DestinationsSection />
      <BookSection />
      <TestimonialsSection />
      <LogoSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}
