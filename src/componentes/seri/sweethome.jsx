export default function SweetHomeDetalle() {
  const data = {
    titulo: "Sweet Home",
    genero: "Terror / Acción / Fantasía oscura",
    duracion: "44-60 minutos por episodio",
    sinopsis:
      "Tras una tragedia familiar, Cha Hyun-su se muda a un complejo de departamentos donde las personas comienzan a transformarse en monstruos impulsados por sus deseos más profundos. Junto a otros residentes, deberá luchar por sobrevivir mientras el mundo exterior colapsa.",
    creadores: "Lee Eung-bok, Hong So-ri, Kim Hyung-min",
    reparto: [
      "Song Kang",
      "Lee Jin-wook",
      "Lee Si-young",
      "Lee Do-hyun",
      "Go Min-si",
      "Park Gyu-young",
      "Kim Nam-hee"
    ],
    productores: "Netflix, Studio Dragon",
    fotografia: "Park Se-seung",
    montaje: "Kim Woo-seok",
    curiosidades: [
      "Está basada en el famoso webtoon del mismo nombre.",
      "Song Kang entrenó intensivamente para las escenas de acción.",
      "Los diseños de los monstruos fueron creados por un equipo que trabajó en 'Stranger Things'.",
      "Se rodó casi toda en locaciones interiores debido a los efectos prácticos y CGI."
    ],
    calificaciones: "7.3/10 IMDb · 83% Rotten Tomatoes",
    estreno: "18 de diciembre de 2020",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/81061734",
    trailer: "https://youtu.be/Uhvslx7urEw",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZDE0MTM5YjgtMzNhOS00NWE2LTkxN2EtMzg0NWRmODBmMDA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="flex-wrap w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
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
