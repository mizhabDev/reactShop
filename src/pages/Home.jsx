// pages/Home.js
import { HeroSection } from "./freatures/HeroSection";
import { SolutionsSection } from "./freatures/SolutionsSection";
import { HowItWorks } from "./freatures/HowItWorks";
import { Testimonials } from "./freatures/Testimonials";
import { Newsletter } from "./freatures/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </>
  );
}