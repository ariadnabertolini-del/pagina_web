export default function DahmerDetalle() {
  const data = {
    titulo: "Dahmer: Monster – The Jeffrey Dahmer Story",
    genero: "Crimen / Drama / Terror psicológico",
    duracion: "45-63 minutos por episodio",
    sinopsis:
      "La serie sigue la vida del asesino serial Jeffrey Dahmer, mostrando cómo logró cometer sus crímenes durante más de una década sin ser detenido. A través de la perspectiva de las víctimas, la policía y el propio Dahmer, se exploran temas de negligencia institucional, racismo y fallas del sistema judicial.",
    creadores: "Ryan Murphy, Ian Brennan",
    reparto: [
      "Evan Peters",
      "Richard Jenkins",
      "Niecy Nash",
      "Molly Ringwald",
      "Michael Learned",
      "Matthew Alan"
    ],
    productores:
      "Ryan Murphy, Eric Kovtun, Carl Franklin, Janet Mock",
    fotografia: "Jason McCormick",
    montaje: "Kenia Fenton, Shelly Westerman",
    curiosidades: [
      "Evan Peters estudió entrevistas reales de Dahmer y mantuvo un diario en el que construyó la psicología del personaje.",
      "La producción recreó el departamento de Dahmer casi idénticamente al original.",
      "Es una de las series más vistas en la historia de Netflix.",
      "Generó polémica por cómo recrea casos reales sin permiso de algunas familias."
    ],
    calificaciones: "8.0/10 IMDb · 57% Rotten Tomatoes",
    estreno: "21 de septiembre de 2022",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/81287562",
    trailer: "https://youtu.be/OjUL6j2Az3Q",
    imagen:
       "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22931799_b_v13_aa.jpg"
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
