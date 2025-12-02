export default function BarbaroDetalle() {
  const data = {
    titulo: "Barbarian (Bárbaro)",
    director: "Zach Cregger",
    reparto: [
      "Georgina Campbell",
      "Bill Skarsgård",
      "Justin Long",
      "Matthew Patrick Davis",
      "Richard Brake",
      "Kate Bosworth"
    ],
    genero: "Terror / Misterio / Suspenso",
    duracion: "102 minutos",

    // Detalles de producción
    guion: "Zach Cregger",
    fotografia: "Zach Kuperstein",
    montaje: "Joe Murphy",
    disenoProduccion: "Rossitsa Bakeva",
    productor: "Arnon Milchan, Roy Lee, J.D. Lifshitz, Raphael Margules",

    // Contenido adicional
    sinopsis:
      "Una mujer viaja a Detroit para una entrevista de trabajo y alquila una casa. Al llegar, descubre que un desconocido ya está hospedado allí. Lo que comienza como una situación incómoda se transforma en una pesadilla cuando descubre lo que se oculta en el sótano.",
    trailer: "https://youtu.be/Ozz3YFrWL70",
    calificaciones: "7.0/10 IMDb · 93% Rotten Tomatoes · 3.6/5 Letterboxd",
    reseñas:
      "Elogiada por su estructura inesperada, tensión constante y giros impredecibles. Considerada una de las sorpresas de terror más originales de los últimos años.",
    taquilla: "45 millones USD",
    curiosidades: [
      "Zach Cregger escribió el guion inspirado en señales de alerta de interacción social.",
      "La casa del film fue completamente construida en un set en Bulgaria.",
      "Bill Skarsgård insistió en interpretar un personaje ambiguo para jugar con la percepción del público."
    ],

    // Imagen y plataforma
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    plataforma: "Star+",
    enlace: "https://www.starplus.com"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="flex-wrap w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
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
            style={{ borderRadius: "14px" }}
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
