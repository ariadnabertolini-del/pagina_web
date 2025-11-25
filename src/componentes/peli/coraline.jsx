export default function CoralineDetalle() {
  const data = {
    titulo: "Coraline",
    director: "Henry Selick",
    reparto: [
      "Dakota Fanning (voz)",
      "Teri Hatcher (voz)",
      "John Hodgman (voz)",
      "Keith David (voz)",
      "Robert Bailey Jr. (voz)",
      "Ian McShane (voz)"
    ],
    genero: "Fantasía oscura / Animación stop-motion / Aventura",
    duracion: "100 minutos",

    // Detalles de producción
    guion: "Henry Selick (basado en la novela de Neil Gaiman)",
    fotografia: "Pete Kozachik",
    montaje: "Christopher Murrie",
    disenoProduccion: "Henry Selick, Tom Proost",
    productor: "Bill Mechanic, Claire Jennings, Henry Selick",

    // Contenido adicional
    sinopsis:
      "Coraline, una niña curiosa, descubre una puerta secreta que la lleva a un mundo alternativo que parece mejor que el suyo… hasta que esa versión 'perfecta' comienza a mostrar su lado oscuro y peligroso.",
    trailer: "https://youtu.be/fvT7W5LHxF4",
    calificaciones: "7.7/10 IMDb · 91% Rotten Tomatoes · 7.5/10 Filmaffinity",
    reseñas:
      "Coraline es aclamada por su atmósfera inquietante, su animación stop-motion excepcional y su visión única del horror para jóvenes.",
    taquilla: "124.6 millones USD",
    curiosidades: [
      "Fue la primera película en stop-motion filmada completamente en 3D.",
      "Neil Gaiman escribió la novela inspirándose en una historia que contaba a su hija.",
      "La producción tardó más de 3 años debido a la técnica cuadro por cuadro.",
      "La 'Otra Madre' se convirtió en un ícono de terror infantil."
    ],

    // Imagen y plataforma
    imagen:
      "https://pm1.aminoapps.com/6571/469dccc734cd3ea1aae2fbe608688c80f1e28e9a_hq.jpg",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com"
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
