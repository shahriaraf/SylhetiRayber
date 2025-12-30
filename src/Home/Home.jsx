import {
  MapPin,
  Clock,
  Heart,
  Star,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Banner from "./Banner/Banner";
import SearchSection from "./SearchSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  // --- COLOR PALETTE REFERENCE ---
  // Primary (Dark Maroon): #452829
  // Secondary (Charcoal): #57595B
  // Accent (Rose Gold): #E8D1C5
  // Background (Cream): #F3E8DF

  return (
    <div className="min-h-screen bg-[#F3E8DF] overflow-x-hidden selection:bg-[#452829] selection:text-[#F3E8DF]">
      <Banner />
      <SearchSection />
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
