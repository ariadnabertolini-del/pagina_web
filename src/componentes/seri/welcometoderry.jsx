export default function WelcomeToDerryDetalle() {
  const data = {
    titulo: "It: Welcome to Derry",
    genero: "Terror sobrenatural",
    duracion: "54-66 minutos por episodio",
     sinopsis:
      "Ambientada en 1962, la serie sigue a la familia Hanlon cuando se muda a Derry, Maine, justo cuando comienzan a ocurrir desapariciones inquietantes. " +
      "A medida que Leroy Hanlon (un mayor de la Fuerza Aérea), su esposa Charlotte y su hijo Will se instalan, descubren horrores ocultos y la presencia maligna conocida como It regresa. " +
      "La serie explora los orígenes de Pennywise y la historia oscura de Derry." ,
    creadores: "Andy Muschietti, Barbara Muschietti, Jason Fuchs",
    reparto: [
      "Taylour Paige",
      "Jovan Adepo", 
      "Stephen Rider", 
      "Clara Stack",  
      "Amanda Christine", 
      "Blake Cameron James", 
      "Miles Ekhardt",  
      "Mikkal Karim-Fidler", 
      "Jack Molloy Legault", 
      "Matilda Legault", 
      "Chris Chalk", 
      "Madeleine Stowe", 
      "Bill Skarsgård"
    ],
    productores: "Barbara Muschietti, Andy Muschietti, Jason Fuchs, Brad Caleb Kane, Bill Skarsgård, Dan Lin, Roy Lee, Shelley Meals",
    fotografia: "Daniel Vilar, Rasmus Heise", 
    montaje: "Esther Sokolow, Matthew V. Colonna, Grant Wooldridge, Glenn Garland", 
    curiosidades: [
      "Bill Skarsgård regresa como Pennywise, igual que en las películas.",
      "La serie está ambientada en 1962, 27 años antes de los eventos de la película *It* (2017).",
      "Los showrunners son Jason Fuchs y Brad Caleb Kane. ",
      "Cada episodio dura entre 54 y 66 minutos.",
      "Fue estrenada el 26 de octubre de 2025 por HBO.",
      "La historia se basa en los interludios del libro de Stephen King, explorando la mitología de Derry."
    ],
    calificaciones: "-", 
    taquilla: "-", 
    estreno: "26 de octubre de 2025",  
    plataforma: "HBO / Max",   
    trailer: "https://youtu.be/iI7vmV7gbKI",
    enlace: "https://www.hbo.com", 
    imagen:
  "https://www.canal26.com/resizer/v2/W4O6XYJF2NFRNOJC3YRTE2LQQA.jpg?auth=0245b6b4aa2465f30caef45784815317c29bdea8f61e51255c6143fe58699c56&smart=true&width=950&height=1141&quality=70"
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