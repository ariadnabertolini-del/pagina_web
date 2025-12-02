export default function ChuckySerieDetalle() {
  const data = {
    titulo: "Chucky (Serie)",
    genero: "Terror / Slasher / Suspenso",
    duracion: "40–48 minutos por episodio",
    sinopsis:
      "Cuando un muñeco Good Guy aparece en una venta de garage, una tranquila ciudad estadounidense queda envuelta en una serie de asesinatos brutales. Chucky vuelve con un nuevo objetivo: manipular adolescentes, desempolvar secretos oscuros y llevar el caos a un nivel más personal e íntimo.",
    creadores: "Don Mancini",
    reparto: [
      "Zackary Arthur",
      "Alyvia Alyn Lind",
      "Bjorgvin Arnarson",
      "Jennifer Tilly",
      "Brad Dourif (voz de Chucky)",
      "Devon Sawa",
      "Lexa Doig"
    ],
    productores: "NBCUniversal / USA Network / Syfy",
    fotografia: "Craig Wrobleski",
    montaje: "Thom Noble, Bob Ducsay",
    curiosidades: [
      "La serie es canon directo de las películas originales.",
      "Brad Dourif vuelve a interpretar la voz de Chucky desde 1988.",
      "Mantiene el humor negro clásico combinado con gore práctico.",
      "Jennifer Tilly interpreta versiones de sí misma y de Tiffany.",
      "Don Mancini dijo que la serie le permitió expandir la historia LGBT+ del universo Chucky."
    ],
    calificaciones: "7.3/10 IMDb · 91% Rotten Tomatoes",
    estreno: "12 de octubre de 2021",
    plataforma: "Star+ / Syfy / USA Network",
    enlace: "https://www.starplus.com/es-419/series/chucky/3w7JzqRR3Jed",
    trailer: "https://youtu.be/ingd04JeO1Y",
    imagen:
      "https://es.web.img3.acsta.net/pictures/21/09/06/17/25/5742155.jpg"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="flex-wrap w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
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
