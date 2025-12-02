export default function HellboundDetalle() {
  const data = {
    titulo: "Rumbo al Infierno",
    genero: "Terror / Fantasía oscura / Sobrenatural",
    duracion: "42-60 minutos por episodio",
    sinopsis:
      "En una Corea del Sur sumida en el caos, seres sobrenaturales aparecen repentinamente para condenar a ciertas personas, enviándolas al infierno mediante ejecuciones brutales. Mientras la sociedad entra en pánico, una nueva secta religiosa llamada 'La Nueva Verdad' toma poder, afirmando conocer el propósito divino detrás de las condenas.",
    creadores: "Yeon Sang-ho",
    reparto: [
      "Yoo Ah-in",
      "Kim Hyun-joo",
      "Park Jeong-min",
      "Won Jin-ah",
      "Yang Ik-june",
      "Lee Re",
      "Kim Shin-rok"
    ],
    productores:
      "Kim Hyun-joo, Han Jae-dae, Yeon Sang-ho",
    fotografia: "Byun Bong-sun",
    montaje: "Yang Jin-mo",
    curiosidades: [
      "Está basada en el webtoon 'Hellbound', creado también por Yeon Sang-ho.",
      "El primer capítulo se presentó en el Festival de Cine de Toronto de 2021 y tuvo ovación.",
      "Superó a 'El Juego del Calamar' en visualizaciones globales durante su estreno.",
      "La serie mezcla terror sobrenatural con crítica social y religiosa."
    ],
    calificaciones: "6.6/10 IMDb · 87% Rotten Tomatoes · 6.4/10 Filmaffinity",
    estreno: "19 de noviembre de 2021",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/81256675",
    trailer: "https://youtu.be/6WwY-HLgoJA",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjIwMDBlZjItNzMyMi00NjQwLWEzOTgtNGFmZTA0NThiMDhkXkEyXkFqcGc@._V1_.jpg"
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
