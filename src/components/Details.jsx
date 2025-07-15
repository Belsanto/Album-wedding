function Details() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-primary text-center mb-16 reveal active font-great-vibes">
          Detalles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Ceremonia & Recepción */}
          <div className="text-center p-6 border border-primary rounded-lg reveal active">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9b7b9b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl mb-3 font-eb-garamond">Ceremonia & Recepción</h3>
            <p className="mb-2 font-eb-garamond">Sé testigo de nuestro día especial.</p>
            <p className="mb-2">Fecha: 11/07/2025</p>
            <p className="mb-2">Ceremonia: 16:00 horas</p>
            <p className="mb-2">Cena: 18:00 horas</p>
            <p className="mb-2 font-eb-garamond">Hacienda La Moraleja</p>

            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d637480.3190503783!2d-75.795302!3d4.455987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x0:0x0!2zNCDQkDMzJzIxLjYiTiA3NcKwNDInNDAuNCJX!3m2!1d4.555!2d-75.711!4m5!1s0x8e38f67f66159fe1:0x44d5ba0cd6eb0642!2sKil%C3%B3metro%207%20V%C3%ADa%2C%20Calarc%C3%A1-Barcelona%2C%20Barcelona%2C%20Calarc%C3%A1%2C%20Quind%C3%ADo!3m2!1d4.4559916!2d-75.7129!5e0!3m2!1ses!2sco!4v1715700000000!5m2!1ses!2sco"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Código de Vestimenta */}
          <div className="text-center p-6 border border-primary rounded-lg reveal active">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9b7b9b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-2xl mb-3 font-eb-garamond">Código de Vestimenta</h3>
            <p className="mb-2">Formal Elegante</p>
            <p>Colores sugeridos: Tonos neutros y pasteles</p>
          </div>

          {/* Regalo – Lluvia de Sobres */}
          <div className="text-center p-6 border border-primary rounded-lg reveal active">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9b7b9b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="text-2xl mb-3 font-eb-garamond">
              Tu presencia en nuestra boda es el mejor regalo que podríamos recibir.
            </h3>
            <p className="mb-2 font-eb-garamond">Sin embargo,</p>
            <p className="mb-2">
              Si deseas brindarnos un detalle adicional, estaremos recibiendo una lluvia de sobres con mucho cariño.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
