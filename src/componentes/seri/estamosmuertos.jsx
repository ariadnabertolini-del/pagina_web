export default function EstamosMuertosDetalle() {
  const data = {
    titulo: "Estamos Muertos",
   genero: "Terror / Suspenso / Zombis",
    duracion: "53-72 minutos por episodio",
    sinopsis:
      "Después de que un virus zombie se desate en una escuela secundaria de Corea del Sur, los estudiantes atrapados deben luchar por sobrevivir sin comida, sin contacto exterior y enfrentando la posibilidad de que sus propios amigos se conviertan en monstruos. El caos se extiende rápidamente mientras el ejército intenta contener el brote.",
    creadores: "Lee Jae-kyoo, Chun Sung-il, Kim Nam-su",
    reparto: [
      "Park Ji-hu (Nam On-jo)",
      "Yoon Chan-young (Lee Cheong-san)",
      "Cho Yi-hyun (Choi Nam-ra)",
      "Park Solomon (Lee Su-hyeok)",
      "Yoo In-soo (Yoon Gwi-nam)",
      "Lee Yoo-mi (Lee Na-yeon)",
      "Kim Byung-chul (Lee Byeong-chan)",
      "Jeon Bae-soo (Nam So-ju)",
      "Im Jae-hyuk (Yang Dae-su)",
      "Ha Seung-ri (Jang Ha-ri)"
    ],
    productores:
      "Park Ji-hyeon, Kim Jong-hak Production, Film Monster by JTBC Studios",
    fotografia: "Park Se-seung",
    montaje: "Shin Min-kyung",
    musica: "Mowg",
    curiosidades: [
      "Está basada en el webtoon 'Now at Our School' de Joo Dong-geun.",
      "Fue una de las series coreanas más vistas de Netflix en su semana de estreno.",
      "El actor Yoon Chan-young tenía 20 años pero interpretaba a un estudiante de secundaria.",
      "Muchas escenas fueron filmadas en sets completamente construidos para permitir destrucción realista."
    ],
    plataforma: "Netflix",
    trailer: "https://youtu.be/Bw8wZ02f-_Q",
    enlace: "https://www.netflix.com/title/81237994",
    imagen:
      "https://image.tmdb.org/t/p/original/kT1c6QGG6bUHDqb4W4Rrw0Rm1v9.jpg"
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