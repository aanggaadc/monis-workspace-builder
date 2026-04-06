import Canvas from "@/components/Canvas";
import ItemSelector from "@/components/ItemSelector";
import SummaryPanel from "@/components/SummaryPanel";

export default function BuilderPage() {
  return (
    <div className="w-full relative h-screen bg-[url('/base-bg.png')] bg-cover bg-position-[center_bottom] overflow-hidden">
      <div className="absolute top-6 left-6 z-50">
        <ItemSelector />
      </div>

      <div className="absolute bottom-55 2xl:bottom-65 left-1/2 -translate-x-1/2">
        <Canvas />
      </div>

      <div className="absolute bottom-6 right-6 z-50">
        <SummaryPanel />
      </div>
    </div>
  );
}
