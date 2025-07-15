function ShareContact() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center reveal active">
          <h2 className="text-4xl md:text-5xl text-primary mb-8 font-dancing">
            Compartenos Las Fotos y Videos Que Tomaste!
          </h2>
          <p className="text-xl mb-10 font-eb-garamond">
            Nos encantaría seguir llenando este album de recuerdos. Por favor, comparte fotos de este día que no esten aqui y nosotros no encargaremos de añadirlas.
          </p>

          <div className="heart-animation mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="#9b7b9b"
              stroke="#9b7b9b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>

          <a
            href="https://wa.me/3147808628"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-confirm inline-block text-white px-10 py-4 rounded-full text-xl mt-10 shadow-lg"
          >
            Envíalas por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default ShareContact
