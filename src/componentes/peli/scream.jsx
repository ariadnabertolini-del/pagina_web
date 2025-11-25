export default function Scream1Detalle() {
  const data = {
    titulo: "Scream",
    director: "Wes Craven",
    reparto: [
      "Neve Campbell",
      "Courteney Cox",
      "David Arquette",
      "Skeet Ulrich",
      "Matthew Lillard",
      "Rose McGowan",
      "Jamie Kennedy",
      "Drew Barrymore"
    ],
    genero: "Terror / Slasher / Misterio",
    duracion: "111 minutos",

    // Detalles de producción
    guion: "Kevin Williamson",
    fotografia: "Mark Irwin",
    montaje: "Patrick Lussier",
    disenoProduccion: "Bruce Alan Miller",
    productor: "Cathy Konrad, Cary Woods",

    // Contenido adicional
    sinopsis:
      "Un asesino enmascarado conocido como Ghostface aterroriza a un grupo de adolescentes en la ciudad de Woodsboro, desencadenando una serie de homicidios mientras utiliza reglas del cine de terror para elegir a sus víctimas.",
    trailer: "https://youtu.be/Zt3bqsMcz9g",
    calificaciones: "7.4/10 IMDb · 81% Rotten Tomatoes · 7.0/10 Filmaffinity",
    reseñas:
      "Considerada una revolución del género slasher, mezclando metacomentario, misterio y terror puro. Dio inicio a una de las sagas más influyentes del cine de horror.",
    taquilla: "173 millones USD",
    curiosidades: [
      "La icónica escena inicial con Drew Barrymore se filmó en solo cinco días.",
      "Ghostface no fue creado por Wes Craven, sino que se basó en una máscara comercial llamada 'The Peanut-Eyed Ghost'.",
      "Originalmente la película iba a llamarse 'Scary Movie'.",
      "La química real entre los actores ayudó a definir el tono de la saga."
    ],

    // Imagen y plataforma
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg",
    plataforma: "Paramount+",
    enlace: "https://www.paramountplus.com"
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
