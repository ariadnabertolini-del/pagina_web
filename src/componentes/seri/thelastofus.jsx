export default function TheLastOfUsDetalle() {
  const data = {
    titulo: "The Last of Us",
    genero: "Drama / Terror / Ciencia ficción",
    duracion: "43–81 minutos por episodio",
    sinopsis:
      "A 20 años de la caída de la civilización, Joel, un sobreviviente endurecido, debe transportar a Ellie, una adolescente inmune a la infección por Cordyceps, a través de los restos de Estados Unidos. Juntos enfrentarán peligros humanos, infectados y un mundo brutal donde la esperanza es un lujo.",
    creadores: "Craig Mazin y Neil Druckmann, basado en el videojuego de Naughty Dog",
    reparto: [
      "Pedro Pascal",
      "Bella Ramsey",
      "Gabriel Luna",
      "Merle Dandridge",
      "Anna Torv",
      "Lamar Johnson",
      "Storm Reid"
    ],
    productores: "HBO, Sony Pictures Television, PlayStation Productions",
    fotografia: "Ksenia Sereda",
    montaje: "Timothy A. Good, Emily Mendez",
    curiosidades: [
      "Está basada en el exitoso videojuego de 2013.",
      "Bella Ramsey afirmó que no jugó el juego antes de la serie para llegar con una interpretación fresca.",
      "Los escenarios de ciudades destruidas se recrearon con enormes sets en Canadá.",
      "El episodio 3 fue aclamado internacionalmente como uno de los mejores de la televisión moderna."
    ],
    calificaciones: "8.8/10 IMDb · 96% Rotten Tomatoes",
    estreno: "15 de enero de 2023",
    plataforma: "HBO Max",
    enlace: "https://www.hbomax.com",
    trailer: "https://youtu.be/HjmsvEZtjtg",
    imagen:
       "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Last_of_Us_season_1_Blu-ray.png"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
        style={{ display: "flex", flexDirection: "row" }}
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
