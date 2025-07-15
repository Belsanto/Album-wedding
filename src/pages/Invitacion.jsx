import CardWindow from "../components/CardWindow";
import Details from "../components/Details";
import Hero from '../components/Hero'
import OurStory from "../components/OurStory";
import RSVP from "../components/RSVP";
import { useEffect } from "react";
import { initRevealOnScroll } from "../utils/reveal";


function Invitacion() {
  useEffect(() => {
    initRevealOnScroll();
  }, []);

  return (
    <div>
      <Hero />
      <OurStory />
      <CardWindow variant={1} />
      <Details />
      <RSVP />
    </div>
  );
}

export default Invitacion