export default function ChuckyDetalle() {
  const data = {
    titulo: "Chucky: El Muñeco Diabólico",
    director: "Tom Holland",
    reparto: [
      "Catherine Hicks",
      "Chris Sarandon",
      "Alex Vincent",
      "Brad Dourif (voz de Chucky)",
      "Dinah Manoff",
      "Tommy Swerdlow"
    ],
    genero: "Terror / Slasher / Muñecos poseídos",
    duracion: "87 minutos",

    // Detalles de producción
    guion: "Don Mancini, John Lafia, Tom Holland",
    fotografia: "Bill Butler",
    montaje: "Edward Warschilka",
    disenoProduccion: "C. J. Strawn",
    productor: "David Kirschner",

    // Contenido adicional
    sinopsis:
      "Después de que un asesino en serie usa magia vudú para transferir su alma a un muñeco Good Guy, una madre soltera y su hijo descubren que el aparentemente inocente juguete está vivo… y tiene sed de sangre.",
    trailer: "https://youtu.be/XJEYIqZaLxw",
    calificaciones: "6.6/10 IMDb · 71% Rotten Tomatoes · 6.5/10 Filmaffinity",
    reseñas:
      "Considerada una de las películas de terror más influyentes de los 80, destacada por su mezcla de horror, humor negro y efectos prácticos.",
    taquilla: "44.2 millones USD",
    curiosidades: [
      "Chucky fue animado con una mezcla de animatrónicos y actores de baja estatura.",
      "El nombre completo de Chucky es Charles Lee Ray, inspirado en asesinos reales.",
      "La franquicia generó múltiples secuelas, una serie y un reboot.",
      "La voz de Brad Dourif se volvió icónica en el cine de terror."
    ],

    // Imagen y plataforma
    imagen:
      "https://m.media-amazon.com/images/M/MV5BY2IzZTc5MDgtNzVmMy00YzlhLTgyODEtMWM2ZGEyNmU3MGVmXkEyXkFqcGc@._V1_.jpg",
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
            style={{ borderRadius: "14px" }}
          />
        </div>

        <div
          style={{ width: "60%" }}
          className="p-8 overflow-y-auto"
        >

          <h1 className="text-3xl font-bold mb-2">{data.titulo}</h1>
          <p className="italic text-red-300 mb-2">{data.genero}</p>
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
