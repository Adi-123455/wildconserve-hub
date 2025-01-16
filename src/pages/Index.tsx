import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WildlifeSection from "@/components/WildlifeSection";
import Guidelines from "@/components/Guidelines";
import Support from "@/components/Support";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WildlifeSection />
      <Guidelines />
      <Support />
    </div>
  );
};

export default Index;