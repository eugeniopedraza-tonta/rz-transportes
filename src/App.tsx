import "./App.css";
import Beams from "./components/Body/Background/Beams";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import MagicBento from "./components/Body/BentoBox/MagicBento";
import Footer from "./components/Layout/Footer";
import CarrouselModal from "./components/Carrousel/CarrouselModal";
import EmailComponent from "./components/EmailForm/EmailComponent";
import RouteMap from "./components/RouteMap/RouteMap";

function App() {
  return (
    <>
      {/* Beams background - fixed fullscreen */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={15}
          lightColor="#ff2600"
          speed={1.2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={15}
        />
      </div>

      {/* Your content goes here */}
      <main className="relative z-10 space-y-6 md:space-y-10 mt-6 md:mt-10">
        <Header />
        <section className="px-4 md:px-8 lg:px-26 mt-30" id="services">
          <Hero />
        </section>
        <section className="px-4 md:px-8 lg:px-26" id="coverage">
          <RouteMap />
        </section>
        {/* Flowing Menu Section */}
        <section className="h-[50dvh]" id="fleet">
          <CarrouselModal />
        </section>
        <section className="md:px-8 lg:px-22" id="about">
          <MagicBento />
        </section>
        <section className="px-4 md:px-8 lg:px-26 flex flex-row items-center justify-between w-full gap-8" id="contact">
          <EmailComponent />
        </section>
        <section className="px-4 md:px-8 lg:px-26">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
