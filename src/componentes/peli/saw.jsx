export default function SawDetalle() {
  const data = {
    titulo: "Saw: El Juego del Miedo",
    director: "James Wan",
    reparto: [
      "Leigh Whannell",
      "Cary Elwes",
      "Danny Glover",
      "Monica Potter",
      "Ken Leung",
      "Tobin Bell"
    ],
    genero: "Terror / Thriller psicológico / Juegos mortales",
    duracion: "103 minutos",

    // Detalles de producción
    guion: "Leigh Whannell",
    fotografia: "David A. Armstrong",
    montaje: "Kevin Greutert",
    disenoProduccion: "Julie Berghoff",
    productor: "Gregg Hoffman, Oren Koules, Mark Burg",

    // Contenido adicional
    sinopsis:
      "Dos hombres despiertan encadenados dentro de un baño abandonado. Para sobrevivir, deben seguir las reglas de un sádico asesino conocido como Jigsaw, quien los obliga a tomar decisiones extremas para salvar sus vidas.",
    trailer: "https://youtu.be/WrFTmZwe5wc",
    calificaciones: "7.6/10 IMDb · 50% Rotten Tomatoes · 7.0/10 Filmaffinity",
    reseñas:
      "Considerada una de las películas de terror psicológico más influyentes de los 2000, destacada por su giro final y su atmósfera claustrofóbica.",
    taquilla: "103 millones USD",
    curiosidades: [
      "Se filmó en solo 18 días con un presupuesto muy bajo.",
      "El famoso final fue escrito desde el principio y no se modificó nunca.",
      "Tobin Bell, Jigsaw, aparece casi toda la película sin moverse.",
      "Originalmente iba a ser un cortometraje, pero se expandió por el potencial de su historia."
    ],

    // Imagen y plataforma
    imagen:
      "https://es.web.img3.acsta.net/medias/nmedia/18/89/75/36/20065254.jpg",
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
