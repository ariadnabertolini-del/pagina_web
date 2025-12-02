export default function EdGeinDetalle() {
  const data = {
    titulo: "Monstruo: La Historia de Ed Gein",
    genero: "Crimen / Terror / Basado en hechos reales",
    duracion: "42-60 minutos por episodio",
    sinopsis:
      "La serie explora la vida y crímenes de Ed Gein, uno de los asesinos más perturbadores de Estados Unidos. Conocido por desenterrar cadáveres y fabricar objetos con restos humanos, su historia inspiró icónicos personajes del cine de terror como Norman Bates, Leatherface y Buffalo Bill.",
    creadores: "Ryan Murphy",
    reparto: [
      "Actor Principal (según casting de la serie/documental)",
      "Narradores invitados",
      "Testimonios reales",
      "Expertos forenses",
      "Familiares"
    ],
    productores:
      "Ryan Murphy, Ian Brennan, Netflix Documentary Unit",
    fotografia: "Equipo documental de Netflix",
    montaje: "Edición documental Netflix",
    curiosidades: [
      "Ed Gein inspiró 'Psicosis', 'La Masacre de Texas' y 'El Silencio de los Inocentes'.",
      "Gran parte del material visual proviene de archivos policiales reales.",
      "La serie mezcla dramatización con entrevistas y documentos oficiales.",
      "Su casa fue demolida por completo para evitar el turismo macabro."
    ],
    calificaciones: "7.2/10 IMDb · 73% Rotten Tomatoes",
    estreno: "2023",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/81639326",
    trailer: "https://youtu.be/0KzPAICUPxg", 
    imagen:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfiqarpfQeIkTSSPuZme67nQuNAOsjfsEDQ&s"
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
