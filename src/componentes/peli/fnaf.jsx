export default function FnafDetalle() {
  const data = {
    titulo: "Five Nights at Freddy's (2023)",
director: "Emma Tammi",
reparto: [
"Josh Hutcherson",
"Elizabeth Lail",
"Piper Rubio",
"Matthew Lillard",
"Mary Stuart Masterson",
"Kat Conner Sterling"
],
genero: "Terror / Suspenso / Animatrónicos",
duracion: "110 minutos",


// Detalles de producción
guion: "Scott Cawthon, Emma Tammi, Seth Cuddeback",
fotografia: "Lyn Moncrief",
montaje: "Ryan Liebert",
disenoProduccion: "Marc Fisichella",
productor: "Jason Blum, Scott Cawthon",


// Contenido adicional
sinopsis:
"Mike Schmidt, un joven con dificultades para mantener un trabajo estable, acepta un puesto como guardia nocturno en Freddy Fazbear's Pizza. Pronto descubre que los animatrónicos del lugar esconden un oscuro secreto y cobran vida durante la noche.",
trailer: "https://youtu.be/IJD1VktHJSw",
calificaciones: "5.5/10 IMDb · 32% Rotten Tomatoes · 5.6/10 Filmaffinity",
reseñas:
"Aunque divisiva entre críticos, la película fue bien recibida por los fans del videojuego por su fidelidad al lore y la interpretación de Matthew Lillard.",
taquilla: "297 millones USD",
curiosidades: [
"Scott Cawthon trabajó directamente en el guion para mantener coherencia con el lore original.",
"Los animatrónicos fueron creados por Jim Henson's Creature Shop.",
"La película fue un éxito masivo en streaming y cines simultáneamente."
],


// Imagen y plataforma
imagen:
"https://sm.ign.com/ign_latam/movie/f/five-night/five-nights-at-freddys-theater_j7c6.jpg",
plataforma: "Prime Video",
enlace: "https://www.primevideo.com"
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
