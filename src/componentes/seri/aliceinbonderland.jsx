export default function AliceInBorderlandDetalle() {
  const data = {
    titulo: "Alice in Borderland",
    genero: "Suspenso / Ciencia ficción / Thriller",
    duracion: "40–55 minutos por episodio",
    sinopsis:
      "Arisu, un joven obsesionado con los videojuegos, queda atrapado junto a sus amigos en una versión paralela y desierta de Tokio. Para sobrevivir, deberán competir en juegos mortales que ponen a prueba su inteligencia, habilidades y humanidad.",
    creadores: "Shinsuke Sato (director), basándose en el manga de Haro Aso",
    reparto: [
      "Kento Yamazaki",
      "Tao Tsuchiya",
      "Nijiro Murakami",
      "Aya Asahina",
      "Dori Sakurada",
      "Ayaka Miyoshi",
      "Yuki Morinaga"
    ],
    productores: "Netflix, Robot Communications",
    fotografia: "Tomohiro Kubo",
    montaje: "Tsuyoshi Imai",
    curiosidades: [
      "Está basada en el manga publicado entre 2010 y 2016.",
      "La recreación de Shibuya vacío se logró combinando CGI y locaciones reales.",
      "Tao Tsuchiya realizó varias de sus propias escenas de acción.",
      "Es una de las series japonesas más vistas en la historia de Netflix."
    ],
    calificaciones: "7.7/10 IMDb · 83% Rotten Tomatoes",
    estreno: "10 de diciembre de 2020",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/80200575",
    trailer: "https://youtu.be/WWgfy-iYGqQ",
    imagen:
      "https://es.web.img3.acsta.net/pictures/20/12/10/09/47/3988792.jpg"
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
