export default function KingdomDetalle() {
  const data = {
    titulo: "Kingdom",
    genero: "Terror / Acción / Histórico / Zombies",
    duracion: "45–56 minutos por episodio",
    sinopsis:
      "En la dinastía Joseon, una misteriosa plaga comienza a revivir a los muertos. El príncipe heredero debe revelar la verdad detrás del brote mientras enfrenta conspiraciones políticas, traiciones y un reino que se derrumba bajo la amenaza de los infectados.",
    creadores: "Kim Eun-hee (guion), Kim Seong-hun (director)",
    reparto: [
      "Ju Ji-hoon",
      "Bae Doona",
      "Ryu Seung-ryong",
      "Kim Sung-kyu",
      "Kim Hye-jun",
      "Jeon Seok-ho",
      "Heo Joon-ho"
    ],
    productores: "Netflix, AStory",
    fotografia: "Kim Seong-hun, Park In-je",
    montaje: "Kim Sang-bum",
    curiosidades: [
      "Es la primera serie original de Corea del Sur producida por Netflix.",
      "Los zombies se mueven inspirados en técnicas de danza tradicional coreana.",
      "La serie mezcla terror con drama político basado en hechos históricos.",
      "El especial 'Kingdom: Ashin of the North' expande el origen del brote."
    ],
    calificaciones: "8.4/10 IMDb · 96% Rotten Tomatoes",
    estreno: "25 de enero de 2019",
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/80180171",
    trailer: "https://youtu.be/Ob8_blMv3O4",
    imagen:
     "https://es.web.img2.acsta.net/c_310_420/pictures/18/12/24/09/53/1626925.jpg"
  };

  return (
    <div className="min-h-screen w-full bg-black p-6 flex justify-center items-center">
      <div
        className="w-full max-w-6xl bg-purple-950 text-white rounded-2xl shadow-xl"
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
