import Countdown from "./_components/sections/Countdown";
import Hero from "./_components/sections/Hero";
import Krakow from "./_components/sections/Krakow";
import Videos from "./_components/sections/Videos";
import BottomBanner from "./_components/shared/ui/BottomBanner";

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <Countdown />
      <Videos />
      <Krakow />
      <BottomBanner />
    </div>
  );
}
