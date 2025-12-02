export default function Conjuro2Detalle() {
  const data = {
    titulo: "El Conjuro 2",
    director: "James Wan",
    reparto: [
      "Vera Farmiga",
      "Patrick Wilson",
      "Madison Wolfe",
      "Frances O'Connor",
      "Lauren Esposito",
      "Benjamin Haigh"
    ],
    genero: "Terror / Sobrenatural / Demonios",
    duracion: "134 minutos",

    // Detalles de producción
    guion: "Chad Hayes, Carey W. Hayes, James Wan, David Leslie Johnson",
    fotografia: "Don Burgess",
    montaje: "Kirk Morri",
    disenoProduccion: "Julie Berghoff",
    productor: "James Wan, Peter Safran, Rob Cowan",

    // Contenido adicional
    sinopsis:
      "Ed y Lorraine Warren viajan a Inglaterra para investigar el famoso caso Enfield, donde una madre y sus cuatro hijos son acechados por una presencia maligna que parece centrarse en Janet, la hija menor.",
    trailer: "https://youtu.be/IwfssYWzabs",
    calificaciones: "7.3/10 IMDb · 80% Rotten Tomatoes · 6.8/10 Filmaffinity",
    reseñas:
      "Destacada por su atmósfera intensa, la introducción de Valak y una historia emocional centrada en la familia.",
    taquilla: "321 millones USD",
    curiosidades: [
      "El diseño de Valak fue cambiado a último momento por una visión que tuvo James Wan.",
      "El caso Enfield es uno de los expedientes más famosos de los Warren.",
      "Gran parte de los efectos paranormales se realizaron con trucos prácticos."
    ],

    // Imagen y plataforma
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMzM2OTE4ZWUtMzNiNy00MzhmLWE0YmMtZGE3ZTg2ZmUwODUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
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
