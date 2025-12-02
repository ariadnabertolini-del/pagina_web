export default function FromDetalle() {
  const data = {
  titulo: "From",
    genero: "Terror / Misterio / Ciencia ficción",
    duracion: "45-55 minutos por episodio",
    sinopsis:
      "En un pueblo misterioso del que nadie puede escapar, los habitantes deben sobrevivir a criaturas nocturnas que imitan voces humanas y a una fuerza desconocida que manipula la realidad. Mientras nuevas familias quedan atrapadas, los secretos del lugar comienzan a revelarse lentamente.",
    creadores: "John Griffin",
    reparto: [
      "Harold Perrineau (Boyd Stevens)",
      "Catalina Sandino Moreno (Tabitha Matthews)",
      "Eion Bailey (Jim Matthews)",
      "David Alpay (Jade Herrera)",
      "Elizabeth Saunders (Donna)",
      "Scott McCord (Smiley)",
      "Ricky He (Kenny Liu)",
      "Chloe Van Landschoot (Kristi Miller)",
      "Avery Konrad (Sara Myers)"
    ],
    productores:
      "Josh Appelbaum, André Nemec, Jeff Pinkner, Jack Bender, John Griffin",
    fotografia: "Juanmi Azpiroz",
    montaje: "Jordie Bellaire, Christopher Maldonado",
    musica: "Cherie Camp, Stephen Barton",
    curiosidades: [
      "La serie está producida por los creadores de *Lost*, lo que explica su estilo de misterio progresivo.",
      "Las criaturas fueron diseñadas para parecer humanas pero con expresiones inquietantes y movimientos mínimos.",
      "Gran parte de la ambientación se grabó en Nueva Escocia.",
      "El árbol que transporta a las personas a otros lugares fue uno de los primeros conceptos visuales definidos por el creador."
    ],
    plataforma: "MGM+ / Amazon Prime Video",
    trailer: "https://youtu.be/A-6HRIzZo7s",
    enlace: "https://www.amazon.com/From-Season-1/",
    imagen:
      "https://upload.wikimedia.org/wikipedia/pt/c/c0/From_%28s%C3%A9rie%29.jpg"
  };


  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">

      <div
        className="flex-wrap w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
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