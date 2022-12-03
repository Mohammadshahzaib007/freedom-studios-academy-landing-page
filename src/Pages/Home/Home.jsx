import Footer from "../../components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function Home() {
  return (
    <div>
      <HeroSection />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <Footer />
    </div>
  );
}

export default Home;
