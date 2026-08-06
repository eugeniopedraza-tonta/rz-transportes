import "./App.css";
import Beams from "./components/Body/Background/Beams";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import TechProtection from "./components/Protection/TechProtection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Layout/Footer";
import CarrouselModal from "./components/Carrousel/CarrouselModal";
import EmailComponent from "./components/EmailForm/EmailComponent";
import RouteMap from "./components/RouteMap/RouteMap";
import WhatsAppButton from "./components/Layout/WhatsAppButton";

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
      <main className="relative z-10 space-y-16 md:space-y-24 mt-6 md:mt-10">
        <Header />
        <section className="px-4 md:px-8 lg:px-26 mt-30 scroll-mt-32" id="services">
          <Hero />
        </section>
        <section className="px-4 md:px-8 lg:px-26 scroll-mt-32" id="coverage">
          <RouteMap />
        </section>
        <section className="px-4 md:px-8 lg:px-26 scroll-mt-32" id="fleet">
          <CarrouselModal />
        </section>
        <section className="px-4 md:px-8 lg:px-26 scroll-mt-32" id="protection">
          <TechProtection />
        </section>
        <section className="px-4 md:px-8 lg:px-26 scroll-mt-32" id="about">
          <WhyChooseUs />
        </section>
        <section className="px-4 md:px-8 lg:px-26 flex flex-row items-center justify-between w-full gap-8 scroll-mt-32" id="contact">
          <EmailComponent />
        </section>
        <section className="px-4 md:px-8 lg:px-26">
          <Footer />
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}

export default App;
