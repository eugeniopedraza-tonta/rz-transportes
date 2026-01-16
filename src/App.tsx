import "./App.css";
import Beams from "./components/Beams";
import Header from "./components/Layout/Header";
import FlowingMenu from "./components/FlowingMenu";
import ModelViewer from "./components/ModelViewer";
import MagicBento from "./components/MagicBento";
import Footer from "./components/Layout/Footer";

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
      <main className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-24">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:gap-0">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-white text-start space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Somos <span className="text-red-500">RZ Transportes</span>
                </h1>
                <p className="text-lg text-white/90 leading-relaxed">
                  RZ Transportes fue fundada en{" "}
                  <span className="font-semibold text-red-400">
                    Monterrey, Nuevo León
                  </span>
                  , con la visión de ofrecer servicios de transporte y distribución
                  totalmente personalizados.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Contamos con experiencia en la gestión de cargas convencionales,
                  especiales y de proyecto, adaptándonos a las necesidades
                  específicas de cada cliente y sector.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-105 transition-all duration-300">
                    <p className="font-semibold text-white">Nuestra misión</p>
                    <p className="text-sm text-white/70">
                      Ofrecer soluciones de transporte totalmente personalizadas.
                    </p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-105 transition-all duration-300">
                    <p className="font-semibold text-white">Nuestra visión</p>
                    <p className="text-sm text-white/70">
                      Ser líderes en transporte de carga pesada en México.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Model Viewer */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="w-full max-w-[600px] aspect-square">
                  <ModelViewer
                    url="/src/assets/truck.glb"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flowing Menu Section */}
        <section className="px-4 lg:px-26">
          <FlowingMenu />
        </section>
        <section className="px-22">
          <MagicBento />
        </section>
        <section className="px-4 lg:px-26">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
