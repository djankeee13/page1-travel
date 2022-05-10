import ImgCarousel from "./carousel/ImgCarousel";
import Navbar from "./components/navbar/Navbar";
import Destinations from "./destinations/Destinations";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Search from "./search/Search";
import Selects from "./selects/Selects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
