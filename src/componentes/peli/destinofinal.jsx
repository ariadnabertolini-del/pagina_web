export default function DestinoFinal5Detalle() {
  const data = {
    titulo: "Destino Final 5",
    director: "Steven Quale",
    reparto: [
      "Nicholas D'Agosto",
      "Emma Bell",
      "Miles Fisher",
      "Ellen Wroe",
      "Jacqueline MacInnes Wood",
      "P. J. Byrne",
      "Arlen Escarpeta",
      "Tony Todd"
    ],
    genero: "Terror / Suspenso / Premoniciones",
    duracion: "92 minutos",

    // Detalles de producción
    guion: "Eric Heisserer",
    fotografia: "Brian Pearson",
    montaje: "Eric Sears",
    disenoProduccion: "David Sandefur",
    productor: "Craig Perry, Warren Zide",

    // Contenido adicional
    sinopsis:
      "Después de que una premonición salva a un grupo de trabajadores de un colapso mortal en un puente colgante, la Muerte comienza a perseguirlos uno por uno, recordándoles que no se le puede escapar para siempre.",
    trailer: "https://youtu.be/NM877mmSphc?list=PLHOyx-vPspxcqze0tCzuT2WqwZU2kURcD",
    calificaciones: "5.9/10 IMDb · 62% Rotten Tomatoes · 5.6/10 Filmaffinity",
    reseñas:
      "Considerada una de las entregas más sólidas de la saga gracias a sus muertes creativas, efectos y el inesperado giro final conectado con la primera película.",
    taquilla: "157 millones USD",
    curiosidades: [
      "La película está conectada directamente con la primera entrega, revelado en su final.",
      "Es la única de la saga filmada totalmente en 3D real.",
      "La escena del puente es una de las secuencias más caras de toda la franquicia.",
      "Tony Todd vuelve como William Bludworth, aumentando el misterio de su personaje."
    ],

    // Imagen y plataforma
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56stHV8bBOmjJh21MmTXeLN5NR1N2GlWTTw&s",
    plataforma: "HBO Max",
    enlace: "https://www.max.com"
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
