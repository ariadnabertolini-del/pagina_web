export default function TheWalkingDeadDetalle() {
  const data = {
     titulo: "The Walking Dead",
 genero: "Terror / Drama / Postapocalíptica",
    duracion: "42-60 minutos por episodio",
    sinopsis:
      "Tras un apocalipsis zombie que arrasa el mundo, un grupo de sobrevivientes liderado inicialmente por Rick Grimes intenta mantenerse con vida mientras enfrenta no solo a los muertos vivientes, sino también a otros grupos humanos cuya crueldad y desesperación pueden resultar aún más peligrosas.",
    creadores: "Frank Darabont",
    reparto: [
      "Andrew Lincoln (Rick Grimes)",
      "Norman Reedus (Daryl Dixon)",
      "Melissa McBride (Carol Peletier)",
      "Lauren Cohan (Maggie Greene)",
      "Danai Gurira (Michonne)",
      "Jeffrey Dean Morgan (Negan)",
      "Chandler Riggs (Carl Grimes)",
      "Steven Yeun (Glenn Rhee)",
      "Sonequa Martin-Green (Sasha Williams)"
    ],
    productores:
      "Frank Darabont, Greg Nicotero, David Alpert, Angela Kang, Gale Anne Hurd, Scott M. Gimple",
    fotografia: "Rhet Bear, Stephen Campbell, Dave Perkal",
    montaje: "Julius Ramsay, Avi Youabian, Blake Marlow",
    musica: "Bear McCreary",
    curiosidades: [
      "Está basada en el cómic homónimo creado por Robert Kirkman.",
      "Greg Nicotero, experto en efectos especiales, desarrolló la mayoría del maquillaje icónico de los caminantes.",
      "La serie duró 11 temporadas y se convirtió en un fenómeno global.",
      "El piloto fue dirigido por Frank Darabont, conocido por *The Shawshank Redemption*."
    ],
    plataforma: "Netflix / AMC+ / Star+",
    trailer: "https://youtu.be/sfAc2U20uyg",
    enlace: "https://www.netflix.com/title/70177057",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/TWD_Season_11_poster.jpg"
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
