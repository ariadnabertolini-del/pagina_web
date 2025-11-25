export default function SquidGameDetalle() {
  const data = {
    titulo: "Squid Game",
    genero: "Suspenso / Drama / Supervivencia",
    duracion: "50-63 minutos por episodio",
    sinopsis:
      "Un grupo de personas endeudadas acepta participar en una serie de juegos infantiles mortales a cambio de un premio multimillonario. A medida que avanzan las rondas, la desesperación, la traición y los dilemas morales ponen a prueba a los participantes.",
    creadores: "Hwang Dong-hyuk",
    reparto: [
      "Lee Jung-jae",
      "Park Hae-soo",
      "Wi Ha-joon",
      "Jung Ho-yeon",
      "O Yeong-su",
      "Heo Sung-tae",
      "Kim Joo-ryung",
      "Anupam Tripathi"
    ],
    productores:
      "Kim Ji-yeon, Hwang Dong-hyuk",
    fotografia: "Lee Hyung-deok",
    montaje: "Kim Sang-bum",
    curiosidades: [
      "El creador escribió la historia en 2008 y fue rechazada durante 10 años.",
      "Los sets del juego de 'Luz roja, luz verde' fueron construidos casi por completo de forma real.",
      "La muñeca 'Young-hee' está inspirada en un personaje de libros infantiles coreanos.",
      "El número de teléfono real usado en la serie causó problemas al dueño original."
    ],
    calificaciones: "8.0/10 IMDb · 95% Rotten Tomatoes · 7.5/10 Filmaffinity",
    estreno: "17 de septiembre de 2021",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/81040344",
    trailer: "https://youtu.be/CtrjHEHPC_A",
    imagen:
      "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/U8YAAOSwthhi2kVl/$_57.JPG?set_id=8800005007"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <div
          style={{
            width: '40%',
            minWidth: '280px',
            padding: '30px',
            paddingRight: '20px',
          }}
          className="flex justify-center items-start"
        >
          <img
            src={data.imagen}
            alt={data.titulo}
            className="w-full max-w-md rounded-xl shadow-lg"
            style={{ borderRadius: '14px' }}
          />
        </div>

        <div style={{ width: '60%' }} className="p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-2">{data.titulo}</h1>
          <p className="italic text-purple-300 mb-2">{data.genero}</p>
          <p className="mb-4"><strong>Duración:</strong> {data.duracion}</p>

          <h2 className="text-xl font-semibold mt-4">Sinopsis</h2>
          <p className="mb-4">{data.sinopsis}</p>

          <h2 className="text-xl font-semibold mt-4">Creador</h2>
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
