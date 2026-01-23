import { useEffect, useState } from "react"
import {
    Map,
    MapTileLayer,
} from "@/components/ui/map"
import { GeoJSON } from "react-leaflet"
import type { Feature, FeatureCollection } from "geojson"
import type { Layer } from "leaflet"

// States where RZ Transportes has coverage (from PDF)
const COVERAGE_STATES = [
    "Nuevo León",
    "Coahuila de Zaragoza", 
    "Chihuahua",
    "Durango",
    "San Luis Potosí"
];

// Display names for states (shorter/cleaner names)
const STATE_DISPLAY_NAMES: Record<string, string> = {
    "Nuevo León": "Nuevo León",
    "Coahuila de Zaragoza": "Coahuila",
    "Chihuahua": "Chihuahua",
    "Durango": "Durango",
    "San Luis Potosí": "San Luis Potosí"
};

const RouteMap = () => {
    const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
    
    // Center to show coverage area
    const mapCenter: [number, number] = [26.5, -102.5];
    
    // Dark tile URL from Carto (no labels version for cleaner look)
    const darkTileUrl = "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
    const darkAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    useEffect(() => {
        // Fetch Mexican states GeoJSON from public source
        fetch("https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json")
            .then(res => res.json())
            .then(data => setGeoData(data))
            .catch(err => console.error("Failed to load states GeoJSON:", err));
    }, []);

    // Style function for each state
    const getStateStyle = (feature: Feature | undefined) => {
        const stateName = feature?.properties?.name;
        const hasCoverage = COVERAGE_STATES.includes(stateName);
        
        return {
            color: "#ffffff",
            weight: 1,
            fillColor: hasCoverage ? "#ff2600" : "transparent",
            fillOpacity: hasCoverage ? 0.4 : 0,
        };
    };

    // Add labels only to coverage states
    const onEachFeature = (feature: Feature, layer: Layer) => {
        const stateName = feature?.properties?.name;
        const hasCoverage = COVERAGE_STATES.includes(stateName);
        
        if (hasCoverage && 'bindTooltip' in layer) {
            const displayName = STATE_DISPLAY_NAMES[stateName] || stateName;
            (layer as L.Layer).bindTooltip(displayName, {
                permanent: true,
                direction: 'center',
                className: 'state-label'
            });
        }
    };

    return (
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl h-[80dvh] w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Nuestra Cobertura</h2>
            <p className="text-white/60 text-sm md:text-base mb-4">
                Cobertura nacional: Nuevo León, San Luis Potosí, Coahuila, Durango y Chihuahua.
            </p>
            <div className="w-full h-[calc(100%-5rem)] rounded-xl overflow-hidden">
                <Map center={mapCenter} zoom={5} scrollWheelZoom={false} dragging={false} doubleClickZoom={false}>
                    <MapTileLayer 
                        url={darkTileUrl}
                        attribution={darkAttribution}
                    />

                    {/* State boundaries from GeoJSON */}
                    {geoData && (
                        <GeoJSON 
                            data={geoData} 
                            style={getStateStyle}
                            onEachFeature={onEachFeature}
                        />
                    )}
                </Map>
            </div>

            <style>{`
                .state-label {
                    font-weight: 600 !important;
                    font-size: 11px !important;
                }
                .state-label::before {
                    display: none !important;
                }
            `}</style>
        </div>
    )
}

export default RouteMap
