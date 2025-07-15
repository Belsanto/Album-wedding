import Collage from "../components/Collage";
import ShareContact from "../components/ShareContact";

function Fotos() {
  return (
    <div>
      <Collage folder="phone Pics" />
      <br></br>
      <ShareContact/>
    </div>
  );
}

export default Fotos;
