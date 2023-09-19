import "./App.css";
import Author from "./Components/Author";
import Ceramics from "./Components/Ceramics";
import Footer from "./Components/Footer";
import HeadingTitle from "./Components/HeadingTitle";
import HotelBranding from "./Components/HotelBranding";
import Interior from "./Components/Interior";
import Interiorpart2 from "./Components/Interiorpart2";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import PhotoGraphy from "./Components/PhotoGraphy";
import Restaurent from "./Components/Restaurent";
import Retail from "./Components/Retail";
import Stills from "./Components/Stills";
import Wedding from "./Components/Wedding";
import Wine from "./Components/Wine";

function App() {
  return (
    <>
      <Navbar />
      <HeadingTitle />
      <PhotoGraphy />
      <Restaurent />
      <Stills />
      <Retail />
      <HotelBranding />
      <Interior />
      <Ceramics />
      <Wine />
      <Menu />
      <Wedding />
      <Author />
      <Footer />
    </>
  );
}

export default App;
