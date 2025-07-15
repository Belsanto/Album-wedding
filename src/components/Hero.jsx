import AudioPlayer from './AudioPlayer'

function Hero() {
  return (
    <section className="hero h-screen flex items-start justify-center relative text-white">
      <div className="titulo text-center p-8 reveal active z-10">
      <br></br>
      <br></br>
        <p className="text-3xl md:text-5xl font-eb-garamond">S & E</p>
        <h2 className="text-5xl md:text-7xl font-great-vibes">Santiago & Estefania</h2>
        <div className="divider bg-white"></div>
        <h2 className="text-3xl md:text-5xl font-eb-garamond">Ambos diremos "Acepto"</h2>

        <AudioPlayer track="default" />

      </div>
    </section>
  )
}

export default Hero
