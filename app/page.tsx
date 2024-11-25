import Image from "next/image";
import { MapComponent } from "./_map/map";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <MapComponent />
    </div>
  );
}
