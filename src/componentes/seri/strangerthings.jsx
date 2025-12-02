export default function StrangerThingsDetalle() {
  const data = {
    titulo: "Stranger Things",
    genero: "Terror / Ciencia ficción / Misterio",
    duracion: "42-77 minutos por episodio",
    sinopsis:
      "En la ciudad de Hawkins, Indiana, un niño desaparece misteriosamente y sus amigos descubren una serie de eventos sobrenaturales relacionados con experimentos secretos del gobierno, criaturas de otra dimensión y una niña con habilidades telequinéticas llamada Eleven.",
    creadores: "The Duffer Brothers (Matt y Ross Duffer)",
    reparto: [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "Winona Ryder",
      "David Harbour",
      "Gaten Matarazzo",
      "Caleb McLaughlin",
      "Natalia Dyer",
      "Charlie Heaton",
      "Joe Keery",
      "Sadie Sink",
      "Noah Schnapp"
    ],
    productores:
      "The Duffer Brothers, Shawn Levy, Dan Cohen, Iain Paterson, Curtis Gwinn, Karl Gajdusek",
    fotografia: "Tim Ives, Tod Campbell, Lachlan Milne",
    montaje: "Dean Zimmerman, Nat Fuller, Kevin Ross",
    curiosidades: [
      "La serie originalmente se iba a llamar 'Montauk' y estar ambientada en Nueva York.",
      "Eleven iba a morir en la primera temporada, pero los creadores cambiaron de idea por su popularidad.",
      "Los creadores se inspiraron en obras de Stephen King, Steven Spielberg y John Carpenter.",
      "La estética y música ochentera son parte clave de su identidad.",
      "La criatura del 'Upside Down' fue diseñada con técnicas prácticas y digitales."
    ],
    calificaciones: "8.7/10 IMDb · 92% Rotten Tomatoes · 8.2/10 Filmaffinity",
    estreno: "15 de julio de 2016",
    plataforma: "Netflix",
    trailer: "https://youtu.be/8XFCGvzbJS0",
    enlace: "https://www.netflix.com/title/80057281",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Stranger_Things_season_1.jpg"
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

           <a href={data.trailer} target="_blank" className="text-blue-400 underline block mb-4">
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
