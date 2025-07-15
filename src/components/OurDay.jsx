import TimelineItem from './TimelineItem'
import TimelineItemVideo from './TimelineItemVideo'
import foto1 from '../assets/album/DSC_0021.jpg';
import foto2 from '../assets/fotos/screenshot.png';
import foto3 from '../assets/fotos/coming_soon_elegant.jpg';

function OurDay() {
  return (
    <section id="nuestra-invitacion" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-primary text-center mb-16 reveal active font-great-vibes maintTittle">
          Así Celebramos Nuestro Día Especial
        </h2>

        <div className="max-w-4xl mx-auto ">
          <TimelineItem
            title="Santiago Recibe A Los Invitados"
            text="Mientras los últimos preparativos tomaban forma, Santiago dio la bienvenida a nuestros seres queridos con una sonrisa en el rostro y el corazón palpitando de emoción."
            image={foto1}
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItemVideo
            title="La Novia Llega!"
            text="Después de algunos contratiempos —incluida una llanta pinchada— Estefanía hizo su entrada triunfal, iluminando el lugar con su presencia. Nada podía opacar ese momento."
            videoUrl="https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/2025-07-11_17-23-23_vbnbi8.mkv"
            thumb={foto2}
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItemVideo
            title="La Entrega De La Novia"
            text="Unas palabras unicas por parte de Luis Fernando el padre de Estefania y Zulmara la madre de Santiago."
            videoUrl="https://player.vimeo.com/video/1101099808"
            type="vimeo"
            reverse={false}
          />


          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItemVideo
            title="La Ceremonia"
            text="Un momento lleno de emoción, promesas y miradas sinceras. Gracias a Nikolai, uno de los hermanos de Santiago, quedó todo inmortalizado en este hermoso video."
            videoUrl="https://player.vimeo.com/video/1101099065"
            type="vimeo"
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="Sesión De Fotos Con La Familia"
            text="Risas, abrazos y muchas tomas espontáneas marcaron esta parte del día. Aunque terminamos cansados, cada fotografía guarda un pedacito de nuestra alegría."
            image={foto3}
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="Cena & Brindis"
            text="Disfrutamos de una deliciosa cena —salmón, pasta alfredo y ensalada César— acompañada de brindis llenos de buenos deseos, palabras que quedarán en nuestros corazones."
            image={foto3}
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="El Pastel De Bodas"
            text="Un dulce momento, literalmente. Compartimos el pastel con todos nuestros invitados, simbolizando el inicio de una vida compartida llena de sabor y dulzura."
            image={foto3}
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="La Despedida"
            text="Terminamos la noche con abrazos, sonrisas y un montón de buenos recuerdos. Gracias por hacer parte de nuestro día; su presencia fue nuestro mejor regalo."
            image={foto3}
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="Un Agradecimiento Especial"
            text="Gracias infinitas a nuestra wedding planner por hacer realidad todo esto, y a la Hacienda Moraleja por ser el escenario perfecto para nuestra historia. ¡Recomendadísimos!"
            image={foto3}
            reverse={false}
          />
        </div>
      </div>
    </section>
  )
}

export default OurDay
