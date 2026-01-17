import "./App.css";
import Beams from "./components/Body/Background/Beams";
import Header from "./components/Layout/Header";
import FlowingMenu from "./components/FlowingMenu";
import MagicBento from "./components/Body/BentoBox/MagicBento";
import Footer from "./components/Layout/Footer";
import CircularGallery from "./components/CircularGallery";

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
        {/* Hero Section */}
        <section className="flex items-center pt-20 md:pt-30">
          <div className="container mx-auto px-4 md:px-0">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 min-h-auto lg:h-[50vh]">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-white text-start space-y-4 md:space-y-7 order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Somos <span className="text-red-500">RZ Transportes</span>
                </h1>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  RZ Transportes fue fundada en{" "}
                  <span className="font-semibold text-red-400">
                    Monterrey, Nuevo León
                  </span>
                  , con la visión de ofrecer servicios de transporte y distribución
                  totalmente personalizados.
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Contamos con experiencia en la gestión de cargas convencionales,
                  especiales y de proyecto, adaptándonos a las necesidades
                  específicas de cada cliente y sector.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 hover:scale-105 transition-all duration-300">
                    <p className="font-semibold text-white text-sm md:text-base">Nuestra misión</p>
                    <p className="text-xs md:text-sm text-white/70">
                      Ofrecer soluciones de transporte totalmente personalizadas.
                    </p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 hover:scale-105 transition-all duration-300">
                    <p className="font-semibold text-white text-sm md:text-base">Nuestra visión</p>
                    <p className="text-xs md:text-sm text-white/70">
                      Ser líderes en transporte de carga pesada en México.
                    </p>
                  </div>
                </div>
              </div>

              {/* Model Viewer */}
              <div className="w-full lg:w-1/2 mx-auto h-[35vh] md:h-[40vh] lg:h-[50vh] order-1 lg:order-2 top-10 z-10">
              <CircularGallery 
                items={[
                  { image: "/trailer-1.jpeg", text: "Carga Pesada" },
                  { image: "/trailer-2.jpeg", text: "Transporte" },
                  { image: "/trailer-3.png", text: "Logística" },
                  { image: "/trailer-4.png", text: "Distribución" },
                  { image: "/trailer-5.png", text: "Nacional" },
                  { image: "/trailer-6.png", text: "Especializado" },
                ]}
                bend={3} 
                textColor="#ffffff" 
                borderRadius={0.05} 
                scrollEase={0.02}
              />
              </div>
            </div>
          </div>
        </section>
        {/* Flowing Menu Section */}
        <section className="px-4 md:px-8 lg:px-26">
          <FlowingMenu />
        </section>
        <section className="md:px-8 lg:px-22">
          <MagicBento />
        </section>
        <section className="px-4 md:px-8 lg:px-26">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
