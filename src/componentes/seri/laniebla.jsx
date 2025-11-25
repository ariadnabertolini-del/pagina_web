export default function TheMistDetalle() {
  const data = {
    titulo: "La Niebla (Serie)",
    genero: "Terror / Suspenso / Drama",
    duracion: "35–50 minutos por episodio",
    sinopsis:
      "Cuando una misteriosa niebla cubre un pequeño pueblo, los habitantes quedan atrapados en una serie de sucesos aterradores. Criaturas invisibles, paranoia colectiva y violencia desatada transforman el lugar en un infierno. Las familias luchan por sobrevivir mientras la niebla revela lo peor de cada persona.",
    creadores: "Christian Torpe, basado en la novela de Stephen King",
    reparto: [
      "Morgan Spector",
      "Alyssa Sutherland",
      "Gus Birney",
      "Danica Curcic",
      "Okezie Morro",
      "Luke Cosgrove",
      "Frances Conroy"
    ],
    productores: "Spike / Dimension Television / TWC-Dimension",
    fotografia: "Darran Tiernan",
    montaje: "Paul Trejo, Stephen Philipson",
    curiosidades: [
      "Está inspirada en el relato de Stephen King, pero toma una historia completamente diferente a la película de 2007.",
      "Stephen King aprobó la idea de una adaptación más centrada en el drama humano.",
      "La niebla se creó combinando VFX con humo real para mayor naturalidad.",
      "Fue cancelada después de su primera temporada, pero ganó una base de fans por su atmósfera psicológica."
    ],
    calificaciones: "5.4/10 IMDb",
    estreno: "22 de junio de 2017",
    plataforma: "Netflix (en algunos países) / Spike (original)",
    enlace: "https://www.netflix.com",
    trailer: "https://youtu.be/84nZk1TZ5Lw",
    imagen:
       "https://m.media-amazon.com/images/M/MV5BMzE3MDk0ODkwM15BMl5BanBnXkFtZTgwMzA5NTk5MTI@._V1_FMjpg_UX1000_.jpg"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {/* Imagen */}
        <div
          style={{
            width: "40%",
            minWidth: "280px",
            padding: "30px",
            paddingRight: "20px"
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

        {/* Información */}
        <div style={{ width: "60%" }} className="p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-2">{data.titulo}</h1>
          <p className="italic text-purple-300 mb-2">{data.genero}</p>
          <p className="mb-4"><strong>Duración:</strong> {data.duracion}</p>

          <h2 className="text-xl font-semibold mt-4">Sinopsis</h2>
          <p className="mb-4">{data.sinopsis}</p>

          <h2 className="text-xl font-semibold mt-4">Creadores</h2>
          <p className="mb-4">{data.creadores}</p>

          <h2 className="text-xl font-semibold mt-4">Reparto</h2>
          <ul className="list-disc list-inside mb-4">
            {data.reparto.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4">Detalles de producción</h2>
          <p><strong>Fotografía:</strong> {data.fotografia}</p>
          <p><strong>Montaje:</strong> {data.montaje}</p>
          <p className="mb-4"><strong>Productores:</strong> {data.productores}</p>

          <h2 className="text-xl font-semibold mt-4">Curiosidades</h2>
          <ul className="list-disc list-inside mb-4">
            {data.curiosidades.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>

          <a
            href={data.trailer}
            target="_blank"
            className="text-blue-400 underline block mb-4"
          >
            Ver tráiler
          </a>

          <h2 className="text-xl font-semibold mt-4">Disponible en</h2>
          <a
            href={data.enlace}
            target="_blank"
            className="text-blue-400 underline"
          >
            {data.plataforma}
          </a>
        </div>
      </div>
    </div>
  );
}
