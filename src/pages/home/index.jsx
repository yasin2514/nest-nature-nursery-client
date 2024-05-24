import Container from "../../components/ui/Container";
import ClientReview from "./ClientReview";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
      <>
        <HeroSection />
        <Container className="my-28 text-justify">
          <ClientReview/>
        </Container>
      </>
    );
};

export default Home;