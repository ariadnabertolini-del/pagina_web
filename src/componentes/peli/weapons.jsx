export default function WeaponsDetalle() {
  const data = {
    titulo: "Weapons (La Hora de la Desaparición)",
    director: "Zach Cregger",
    reparto: [
      "Josh O'Connor",
      "Riley Keough",
      "Amber Midthunder",
      "Austin Abrams",
      "Braden Duemmler",
      "Kali Reis"
    ],
    genero: "Terror / Misterio / Thriller",
    duracion: "110 minutos",

    // Detalles de producción
    guion: "Zach Cregger",
    fotografia: "Adam Stone",
    montaje: "Josh Ethier",
    disenoProduccion: "Elliot Hostetter",
    productor: "Roy Lee, J.D. Lifshitz, Raphael Margules",

    // Contenido adicional
    sinopsis:
      "Una serie de desapariciones inquietantes sacude a una comunidad estadounidense cuando un joven estudiante se esfuma sin dejar rastro. A medida que las tensiones aumentan, extraños sucesos conectan los casos en un misterio cada vez más perturbador.",
    trailer: "https://youtu.be/kRQp10hiShs",
    calificaciones: "6.2/10 IMDb · 68% Rotten Tomatoes · 6.1/10 Letterboxd",
    reseñas:
      "Un thriller atmosférico y psicológico con un enfoque inquietante y simbólico. La película mantiene un suspenso constante y expande el estilo de terror moderno del director de 'Barbarian'.",
    taquilla: "Datos no oficiales",
    curiosidades: [
      "Es el segundo largometraje de Zach Cregger tras el éxito de 'Barbarian' (2022).",
      "La producción comenzó en 2023 y enfrentó demoras por la huelga de actores.",
      "El director describió la película como 'más experimental y fragmentada' que su anterior trabajo."
    ],

    // Imagen y plataforma
    imagen:
      "https://resizing.flixster.com/urnEX1TNbxIyYQPcRuEISEPcCqM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30053254_v_v13_ah.jpg",
    plataforma: "Cines / Próximamente en streaming",
    enlace: "https://www.youtube.com/watch?v=H5HT1hpI7Bc"
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
