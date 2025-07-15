import TimelineItem from './TimelineItem'
import foto1 from '../assets/fotos/IMG_0555.JPEG';
import foto2 from '../assets/fotos/img_2.jpeg';
import foto3 from '../assets/fotos/img3.jpeg';

function OurStory() {
  return (
    <section id="nuestra-invitacion" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-primary text-center mb-16 reveal active font-great-vibes">
          Nuestra Historia
        </h2>

        <div className="max-w-4xl mx-auto">
          <TimelineItem
            title="Una casualidad que cambió todo: Una chica conoce a un chico y él se enamora de ella"
            text="Nos conocimos a la salida de la universidad. Una pizza, muchas risas y un paseo por Salento fueron el inicio. Al despedirnos, llegó nuestro primer beso… y con él, una historia que apenas comenzaba."
            image={foto1}
            reverse={false}
          />

          <div className="timeline-dot"></div>
          <div className="timeline-line"></div>

          <TimelineItem
            title="Nuestro Noviazgo: 8 años de amor y crecimiento"
            text="Desde entonces, hemos crecido juntos: profesionalmente, como pareja y como personas. Hemos descubierto nuevos sabores, paisajes y amistades… siempre tomados de la mano."
            image={foto2}
            reverse={true}
          />

          <div className="timeline-dot"></div>
          <div className="timeline-line"></div>

          <TimelineItem
            title="Un nuevo capítulo: ¡Nos Casamos!"
            text="Hoy, después de ocho años de compartir la vida, estamos listos para dar el siguiente paso. Queremos celebrarlo contigo, porque tu presencia hace parte de esta historia de amor."
            image={foto3}
            reverse={false}
          />
        </div>
      </div>
    </section>
  )
}

export default OurStory
