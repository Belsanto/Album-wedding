import CardWindow from "../components/CardWindow";
import Details from "../components/Details";
import RSVP from "../components/RSVP";
import { useEffect } from "react";
import { initRevealOnScroll } from "../utils/reveal";
import SpecialIntro from "../components/SpecialIntro";
import OurDay from "../components/OurDay";


function Home() {
  useEffect(() => {
    initRevealOnScroll();
  }, []);

  return (
    <div>
      <SpecialIntro />
      <OurDay />
      <CardWindow variant={2} />
    </div>
  );
}

export default Home