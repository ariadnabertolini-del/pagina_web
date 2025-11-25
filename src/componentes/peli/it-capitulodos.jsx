export default function It2019Detalle() {
  const data = {
    titulo: "It: Capítulo Dos",
    genero: "Terror / Fantasía / Suspenso",
    duracion: "169 minutos",
    sinopsis:
      "27 años después de su primer encuentro con Pennywise, los miembros del Club de los Perdedores regresan a Derry ya como adultos para enfrentar nuevamente al ente maligno que ha vuelto a despertar.",
    director: "Andy Muschietti",
    reparto: [
      "Bill Skarsgård",
      "James McAvoy",
      "Jessica Chastain",
      "Bill Hader",
      "Isaiah Mustafa",
      "Jay Ryan",
      "James Ransone",
      "Andy Bean",
      "Jaeden Martell",
      "Sophia Lillis",
      "Finn Wolfhard",
      "Jack Dylan Grazer",
      "Chosen Jacobs",
      "Wyatt Oleff",
      "Jeremy Ray Taylor"
    ],
    guion: "Gary Dauberman",
    fotografia: "Checco Varese",
    montaje: "Jason Ballantine",
    disenoProduccion: "Paul D. Austerberry",
    productor: "Barbara Muschietti, Roy Lee, Dan Lin",
    curiosidades: [
      "Bill Hader improvisó varias líneas que terminaron siendo usadas en la película.",
      "Tuvo que recrearse digitalmente la cara de Pennywise para ciertas escenas de transformación.",
      "Stephen King tiene un cameo interpretando a un vendedor local en Derry."
    ],
    calificaciones: "6.5/10 IMDb · 62% Rotten Tomatoes · 3.6/5 Filmaffinity",
    taquilla: "473 millones USD",
    trailer: "https://youtu.be/8gJ2K0xBRO4",
    plataforma: "HBO Max",
    enlace: "https://www.hbomax.com",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/6/64/It_Chapter_Two_%282019%29_poster.jpg"
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
            style={{
              borderRadius: "14px",
            }}
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
