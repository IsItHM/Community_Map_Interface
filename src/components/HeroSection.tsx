import Link from "next/link";
import { World, GlobeConfig } from "./ui/globe";
import { useMemo } from "react";

const globeConfig: GlobeConfig = {
  pointSize: 1,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff"
};

const generateRandomPositions = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    order: i,
    startLat: Math.random() * 180 - 90,
    startLng: Math.random() * 360 - 180,
    endLat: Math.random() * 180 - 90,
    endLng: Math.random() * 360 - 180,
    arcAlt: Math.random() * 0.8 + 0.1,
    color: `hsl(${Math.random() * 360}, 50%, 50%)`
  }));
};

export default function HeroSection() {
  const globeData = useMemo(() => generateRandomPositions(20), []);

  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50 z-0" />
      
      <div className="absolute inset-0 w-full h-full z-10">
        <World globeConfig={globeConfig} data={globeData} />
      </div>
      
      <div className="p-4 relative z-20 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight md:leading-relaxed">
          Flood Risk Mapping With Open Data
        </h1>

        <p className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Explore an interactive map that reveals flood risks in our community, using open-source data to uncover powerful insights about how local geography shapes flood patterns. Understand the impact of these risks and discover actionable strategies for building a more resilient future.
        </p>
        <div className="mt-8">
          <Link href="/maps" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Explore Maps
          </Link>
        </div>
      </div>
    </div>
  );
}