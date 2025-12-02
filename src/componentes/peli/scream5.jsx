export default function Scream5Detalle() {
  const data = {
titulo: "Scream 5",
    genero: "Terror / Slasher / Misterio",
    duracion: "114 minutos",
    sinopsis:
      "25 años después de la ola original de asesinatos en Woodsboro, un nuevo Ghostface emerge para perseguir a un grupo de adolescentes. Viejas caras regresan para enfrentar el horror una vez más.",
    director: "Matt Bettinelli-Olpin, Tyler Gillett",
    reparto: [
      "Melissa Barrera",
      "Jenna Ortega",
      "Mason Gooding",
      "Jasmin Savoy Brown",
      "Jack Quaid",
      "Mikey Madison",
      "Dylan Minnette",
      "Courtney Cox",
      "Neve Campbell",
      "David Arquette",
      "Marley Shelton"
    ],
    guion: "James Vanderbilt, Guy Busick",
    fotografia: "Brett Jutkiewicz",
    montaje: "Michel Aller",
    disenoProduccion: "Chad Keith",
    productor: "Kevin Williamson, Chad Villella, William Sherak, James Vanderbilt",
    curiosidades: [
      "Fue la primera película de la saga sin Wes Craven, quien falleció en 2015.",
      "Neve Campbell aceptó volver solo después de leer un guion que honrara a Craven.",
      "El título es simplemente 'Scream' como homenaje a la película original de 1996.",
      "Jenna Ortega ganó enorme popularidad después de su papel, considerado uno de los mejores de la saga."
    ],
    calificaciones: "6.3/10 IMDb · 76% Rotten Tomatoes · 3.4/5 Filmaffinity",
    taquilla: "138 millones USD",
    trailer: "https://youtu.be/-Ccp4Kd4N88",
    plataforma: "Paramount+",
    enlace: "https://www.paramountplus.com",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg"
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