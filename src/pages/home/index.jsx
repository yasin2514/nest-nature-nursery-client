import Container from "../../components/ui/Container";
import BestProductsSection from "./BestProductsSection";
import ClientReviewSection from "./ClientReviewSection";
import HeroSection from "./HeroSection";
import HowToOrderSection from "./HowToOrderSection";
import InformationSection from "./InformationSection";
import OurNurserySection from "./OurNurserySection";
import ServiceSection from "./ServiceSection";
import TrendingProductsSection from "./TrendingProductsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container className="my-24 space-y-24">
        <OurNurserySection />
        <TrendingProductsSection />
        {/* <HowToOrderSection /> */}
        <ServiceSection />
      </Container>
      {/* <InformationSection /> */}
      <Container className="my-24 space-y-24">
        {/* <BestProductsSection /> */}
        {/* <ClientReviewSection /> */}
      </Container>
    </>
  );
};

export default Home;
