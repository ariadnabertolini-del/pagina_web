export default function Conjuro1Detalle() {
  const data = {
    titulo: "El Conjuro",
    director: "James Wan",
    reparto: [
      "Vera Farmiga",
      "Patrick Wilson",
      "Ron Livingston",
      "Lili Taylor",
      "Shanley Caswell",
      "Hayley McFarland"
    ],
    genero: "Terror / Sobrenatural / Demonios",
    duracion: "112 minutos",

    // Detalles de producción
    guion: "Chad Hayes, Carey W. Hayes",
    fotografia: "John R. Leonetti",
    montaje: "Kirk Morri",
    disenoProduccion: "Julie Berghoff",
    productor: "James Wan, Tony DeRosa-Grund, Peter Safran",

    // Contenido adicional
    sinopsis:
      "Basada en hechos reales, la historia sigue a Ed y Lorraine Warren, investigadores paranormales que ayudan a la familia Perron, atormentada por una presencia demoníaca en su granja en Rhode Island.",
    trailer: "https://youtu.be/wE59Ajd_v9M",
    calificaciones: "7.5/10 IMDb · 86% Rotten Tomatoes · 7.1/10 Filmaffinity",
    reseñas:
      "Considerada una de las mejores películas de terror moderno por su atmósfera, dirección y actuaciones.",
    taquilla: "319 millones USD",
    curiosidades: [
      "La casa real donde ocurrieron los hechos sigue siendo visitada por investigadores paranormales.",
      "Los Warren participaron en parte del proceso creativo.",
      "James Wan decidió usar efectos prácticos para aumentar el realismo."
    ],

    // Imagen y plataforma
    imagen:
      "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    plataforma: "HBO Max",
    enlace: "https://www.max.com"
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
