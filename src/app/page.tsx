import Header from "./components/Header";
import Frame from "./components/Frame";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import Video from "./components/Video";
import Highlights from "./components/Highlights";
import Expertise from "./components/Expertise";
import Services from "./components/Services";
import { Info } from "./components/Info";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Frame />
      <Features />
      <Products />
      <About />
      <Video />
      <Highlights />
      <Expertise />
      <Services />
      <Info />
      <Footer />
    </main>
  );
}
