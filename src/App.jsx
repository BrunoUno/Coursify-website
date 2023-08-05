import Navbar from "./Navbar";
import Hero from "./Hero";
import CompaniesLogos from "./CompaniesLogos";
import Services from "./Services";
import Reviews from "./Reviews";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Hero />
          <CompaniesLogos />
          <Services />
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  );
}
