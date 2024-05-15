import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <MainLayout />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
