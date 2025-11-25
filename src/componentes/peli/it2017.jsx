export default function It2017Detalle() {
  const data = {
    titulo: "It: capitulo uno",
    genero: "Terror / Suspenso",
    duracion: "135 minutos",
    sinopsis:
      "Un grupo de niños conocido como 'El Club de los Perdedores' descubre que un ente maligno toma la forma de un payaso llamado Pennywise y aterroriza el pueblo de Derry cada 27 años.",
    director: "Andy Muschietti",
    reparto: [
      "Bill Skarsgård",
      "Jaeden Martell",
      "Finn Wolfhard",
      "Sophia Lillis",
      "Jack Dylan Grazer",
      "Chosen Jacobs",
      "Wyatt Oleff",
      "Jeremy Ray Taylor"
    ],
    guion: "Chase Palmer, Cary Fukunaga, Gary Dauberman",
    fotografia: "Chung-hoon Chung",
    montaje: "Jason Ballantine",
    disenoProduccion: "Claude Paré",
    productor: "Roy Lee, Dan Lin, Seth Grahame-Smith",
    curiosidades: [
      "Bill Skarsgård mantuvo a los niños alejados durante rodaje para que su miedo fuera real.",
      "La película fue la más taquillera de terror en la historia hasta ese momento.",
      "El director Andy Muschietti pidió que Pennywise apareciera lo menos posible para aumentar el suspenso."
    ],
    calificaciones: "7.3/10 IMDb · 86% Rotten Tomatoes · 4.4/5 Filmaffinity",
    taquilla: "701.8 millones USD",
    trailer: "https://youtu.be/rhn7VP3rpl0",
    plataforma: "HBO Max",
    enlace: "https://www.hbomax.com",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
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