import Container from "../../components/ui/Container";
import BestProductsSection from "./BestProductsSection";
import ClientReviewSection from "./ClientReviewSection";
import HeroSection from "./HeroSection";
import HowToOrderSection from "./HowToOrderSection";
import OurNurserySection from "./OurNurserySection";
import ServiceSection from "./ServiceSection";
import TrendingProductsSection from "./TrendingProductsSection";

const Home = () => {
    return (
      <>
        <HeroSection />
        <Container className="my-24 space-y-24">
          <OurNurserySection/>
          <TrendingProductsSection/>
          <HowToOrderSection/>
          <BestProductsSection/>
          <ServiceSection/>
          <ClientReviewSection/>
        </Container>
      </>
    );
};

export default Home;