import Image from "next/image";
import { HeroSection } from "../components/sections/HeroSection";
import { CategorySection } from "../components/sections/CategorySection";
import { DestinationsSection } from "../components/sections/DestinationsSection";
import { BookSection } from "../components/sections/BookSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <DestinationsSection />
      <BookSection />
    </div>
  );
}
