export default function AnnabelleDetalle() {
  const data = {
    titulo: "Annabelle",
    director: "John R. Leonetti",
    reparto: [
      "Annabelle Wallis",
      "Ward Horton",
      "Alfre Woodard",
      "Tony Amendola",
      "Kerry O'Malley",
      "Brian Howe"
    ],
    genero: "Terror / Sobrenatural / Muñeca poseída",
    duracion: "99 minutos",

    // Detalles de producción
    guion: "Gary Dauberman",
    fotografia: "James Kniest",
    montaje: "Tom Elkins",
    disenoProduccion: "Bob Ziembicki",
    productor: "Peter Safran, James Wan",

    // Contenido adicional
    sinopsis:
      "Una pareja comienza a experimentar sucesos paranormales después de adquirir una muñeca antigua llamada Annabelle, que parece estar conectada con un culto demoníaco.",
    trailer: "https://youtu.be/XY6CTMs0h18",
    calificaciones: "5.4/10 IMDb · 29% Rotten Tomatoes · 5.8/10 Filmaffinity",
    reseñas:
      "Destacada por su atmósfera inquietante y por expandir el universo de 'El Conjuro', introduciendo a la icónica muñeca poseída.",
    taquilla: "257 millones USD",
    curiosidades: [
      "Annabelle está inspirada en una muñeca Raggedy Ann real investigada por los Warren.",
      "Fue el primer spin-off oficial del Universo de El Conjuro.",
      "James Wan participó personalmente en varias decisiones creativas durante el rodaje."
    ],

    // Imagen y plataforma
    imagen:
     "https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    plataforma: "HBO Max",
    enlace: "https://www.max.com"
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
