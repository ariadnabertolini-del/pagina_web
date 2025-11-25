export default function GuerraMundialZDetalle() {
  const data = {
    titulo: "Guerra Mundial Z",
    director: "Marc Forster",
    reparto: [
      "Brad Pitt",
      "Mireille Enos",
      "Daniella Kertesz",
      "James Badge Dale",
      "David Morse",
      "Peter Capaldi"
    ],
    genero: "Acción / Terror / Apocalipsis",
    duracion: "116 minutos",

    // Detalles de producción
    guion: "Matthew Michael Carnahan, Drew Goddard, Damon Lindelof",
    fotografia: "Ben Seresin",
    montaje: "Matt Chesse, Roger Barton",
    disenoProduccion: "Nigel Phelps",
    productor: "Brad Pitt, Dede Gardner, Jeremy Kleiner, Ian Bryce",

    // Contenido adicional
    sinopsis:
      "Cuando una pandemia global transforma a millones en criaturas violentas y veloces, Gerry Lane, un exinvestigador de la ONU, recorre el mundo buscando una forma de detener la propagación del contagio antes de que la humanidad colapse por completo.",
    trailer: "https://youtu.be/S60AdXu43h0",
    calificaciones: "7.0/10 IMDb · 66% Rotten Tomatoes · 6.5/10 Filmaffinity",
    reseñas:
      "Reconocida por su ritmo frenético y secuencias de acción memorables, especialmente la escena de Jerusalén. Brad Pitt recibió elogios por su actuación.",
    taquilla: "540 millones USD",
    curiosidades: [
      "Brad Pitt se involucró en el proyecto porque quería protagonizar una película de zombies distinta a las típicas del género.",
      "El final original era completamente diferente y mucho más oscuro, pero fue reemplazado tras múltiples reshoots.",
      "La escena de Jerusalén tardó semanas en filmarse y requirió miles de extras."
    ],

    // Imagen y plataforma
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/World_War_Z_poster.jpg",
    plataforma: "Prime Video",
    enlace: "https://www.primevideo.com"
  };

return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">

      <div
        className="w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
        style={{ display: "flex", flexDirection: "row" }}
      >

        <div
          style={{
            width: "40%",
            minWidth: "280px",
            padding: "30px",
            paddingRight: "20px",
          }}
          className="flex justify-center items-start"
        >
          <img
            src={data.imagen}
            alt={data.titulo}
            className="w-full max-w-md rounded-xl shadow-lg"
            style={{
              borderRadius: "14px",
            }}
          />
        </div>

        <div
          style={{ width: "60%" }}
          className="p-8 overflow-y-auto"
        >

          <h1 className="text-3xl font-bold mb-2">{data.titulo}</h1>
          <p className="italic text-purple-300 mb-2">{data.genero}</p>
          <p className="mb-4"><strong>Duración:</strong> {data.duracion}</p>

          <h2 className="text-xl font-semibold mt-4">Sinopsis</h2>
          <p className="mb-4">{data.sinopsis}</p>

          <h2 className="text-xl font-semibold mt-4">Director</h2>
          <p className="mb-4">{data.director}</p>

          <h2 className="text-xl font-semibold mt-4">Reparto</h2>
          <ul className="list-disc list-inside mb-4">
            {data.reparto.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4">Detalles de producción</h2>
          <p><strong>Guion:</strong> {data.guion}</p>
          <p><strong>Fotografía:</strong> {data.fotografia}</p>
          <p><strong>Montaje:</strong> {data.montaje}</p>
          <p><strong>Diseño de producción:</strong> {data.disenoProduccion}</p>
          <p className="mb-4"><strong>Productores:</strong> {data.productor}</p>

          <h2 className="text-xl font-semibold mt-4">Curiosidades</h2>
          <ul className="list-disc list-inside mb-4">
            {data.curiosidades.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>

          <a href={data.trailer} target="_blank" className="text-blue-400 underline block mb-4">
            Ver tráiler
          </a>

          <h2 className="text-xl font-semibold mt-4">Disponible en</h2>
          <a href={data.enlace} target="_blank" className="text-blue-400 underline">
            {data.plataforma}
          </a>

        </div>
      </div>
    </div>
  );
}

