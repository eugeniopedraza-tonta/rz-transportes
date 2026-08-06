import { useEffect, useState } from "react"
import {
    Map,
    MapTileLayer,
    MapMarker,
    MapTooltip,
} from "@/components/ui/map"
import { GeoJSON } from "react-leaflet"
import type { FeatureCollection } from "geojson"

const LocalCoverageMap = () => {
    const [geoData, setGeoData] = useState<FeatureCollection | null>(null);

    // Centered on the state so it reads as full coverage, not just the metro area
    const mapCenter: [number, number] = [25.5, -99.9];

    const darkTileUrl = "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
    const darkAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    useEffect(() => {
        fetch("/data/nuevo-leon-municipios.json")
            .then(res => res.json())
            .then(data => setGeoData(data))
            .catch(err => console.error("Failed to load Nuevo León municipios GeoJSON:", err));
    }, []);

    // Every municipio gets the same fill — the whole state is covered, not just the metro area
    const getMunicipioStyle = () => ({
        color: "#ffffff",
        weight: 0.75,
        opacity: 0.5,
        fillColor: "#ff2600",
        fillOpacity: 0.4,
    });

    return (
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl h-[70dvh] md:h-[80dvh] w-full">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Cobertura Local</h3>
            <p className="text-white/60 text-sm md:text-base mb-4">
                Servicio local en todo el estado de Nuevo León, con sede en el Área Metropolitana de Monterrey.
            </p>
            <div className="w-full h-[calc(100%-5.5rem)] rounded-xl overflow-hidden">
                <Map center={mapCenter} zoom={7} scrollWheelZoom={false} dragging={false} doubleClickZoom={false}>
                    <MapTileLayer
                        url={darkTileUrl}
                        attribution={darkAttribution}
                    />

                    {geoData && (
                        <GeoJSON
                            data={geoData}
                            style={getMunicipioStyle}
                        />
                    )}

                    <MapMarker
                        position={[25.6866, -100.3161]}
                        icon={
                            <span className="relative flex size-3 items-center justify-center">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-75" />
                                <span className="relative size-2.5 rounded-full bg-red-500 border border-white" />
                            </span>
                        }
                        iconAnchor={[6, 6]}
                    >
                        <MapTooltip permanent direction="bottom" className="metro-pin-label">
                            Monterrey — Sede Central
                        </MapTooltip>
                    </MapMarker>
                </Map>
            </div>

            <style>{`
                .metro-pin-label {
                    font-weight: 500 !important;
                    font-size: 10px !important;
                }
            `}</style>
        </div>
    )
}

export default LocalCoverageMap
