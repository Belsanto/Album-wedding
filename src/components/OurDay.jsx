import TimelineItem from './TimelineItem'
import TimelineItemVideo from './TimelineItemVideo'
import foto1 from '../assets/boda/otras/DSC_0021.jpg';
import fotoNovia from '../assets/boda/novia/Estefa y Santiago-6.jpg';
import fotoFamily from '../assets/boda/familia y amigos/Estefa y Santiago-177.jpg';
import fotoBridis from '../assets/boda/familia y amigos/Estefa y Santiago-232.jpg';
import fotoPastel from '../assets/boda/otras/Estefa y Santiago-226.jpg';
import fotoBye from '../assets/boda/pareja/Estefa y Santiago-220.jpg';
import fotoThanks from '../assets/boda/pareja/Estefa y Santiago-146.jpg';
import foto2 from '../assets/fotos/screenshot.png';

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

          <TimelineItem
            title="Estefania tiene contratiempos para llegar"
            text="Ella estaba nerviosa pero sabia que todo iba a salir bien."
            image={fotoNovia}
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItemVideo
            title="La Novia Llega!"
            text="Después de algunos contratiempos —incluida una llanta pinchada— Estefanía hizo su entrada triunfal, iluminando el lugar con su presencia. Nada podía opacar ese momento."
            videoUrl="https://res.cloudinary.com/ddbam3j0f/video/upload/v1752464515/2025-07-11_17-23-23_vbnbi8.mkv"
            thumb={foto2}
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItemVideo
            title="La Entrega De La Novia"
            text="Unas palabras unicas por parte de Luis Fernando el padre de Estefania y Zulmara la madre de Santiago."
            videoUrl="https://player.vimeo.com/video/1101099808"
            type="vimeo"
            reverse={true}
          />


          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItemVideo
            title="La Ceremonia"
            text="Un momento lleno de emoción, promesas y miradas sinceras. Gracias a Nikolai, uno de los hermanos de Santiago, quedó todo inmortalizado en este hermoso video."
            videoUrl="https://player.vimeo.com/video/1101099065"
            type="vimeo"
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="Sesión De Fotos Con La Familia"
            text="Risas, abrazos y muchas tomas espontáneas marcaron esta parte del día. Aunque terminamos cansados, cada fotografía guarda un pedacito de nuestra alegría."
            image={fotoFamily}
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="Cena & Brindis"
            text="Disfrutamos de una deliciosa cena —salmón, pasta alfredo y ensalada César— acompañada de brindis llenos de buenos deseos, palabras que quedarán en nuestros corazones."
            image={fotoBridis}
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="El Pastel De Bodas"
            text="Un dulce momento, literalmente. Compartimos el pastel con todos nuestros invitados, simbolizando el inicio de una vida compartida llena de sabor y dulzura."
            image={fotoPastel}
            reverse={true}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="La Despedida"
            text="Terminamos la noche con abrazos, sonrisas y un montón de buenos recuerdos. Gracias por hacer parte de nuestro día; su presencia fue nuestro mejor regalo."
            image={fotoBye}
            reverse={false}
          />

          <div className="timeline-dot mainColor"></div>
          <div className="timeline-line mainColor"></div>

          <TimelineItem
            title="Un Agradecimiento Especial"
            text="Gracias infinitas a nuestra wedding planner por hacer realidad todo esto, y a la Hacienda Moraleja por ser el escenario perfecto para nuestra historia. ¡Recomendadísimos!"
            image={fotoThanks}
            reverse={true}
          />
        </div>
      </div>
    </section>
  )
}

export default OurDay
