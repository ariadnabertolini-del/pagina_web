export default function WebsGratis() {
  const sitios = [
    {
      nombre: "MXL Movies",
      descripcion: "Plataforma con películas de terror, clásicos y estrenos.",
      url: "https://mxl-apps.io/movies#google_vignette", 
    },
    {
      nombre: "Magis TV",
      descripcion: "Sitio gratuito para ver películas online en buena calidad.",
      url: "https://magistv.icu/",
    },
  ];

  return (
<main className="min-h-screen bg-gradient-to-b from-black via-[#1a002e] to-black text-gray-100 px-6 pt-24 pb-16">
  <h2 className="text-center text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.4)] mb-10">
    Sitios para ver Gratis
  </h2>

  <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
    Aquí tenés una lista de páginas gratuitas donde podés encontrar películas
    y series de forma sencilla. Nosotros no alojamos contenido, solo
    recomendamos sitios externos.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {sitios.map((sitio, i) => (
      <div
        key={i}
        className="bg-[#150025]/60 p-6 rounded-2xl shadow-xl border border-purple-700/40 hover:scale-105 transition-transform hover:bg-[#2a004a]/60"
      >
        <h3 className="text-2xl font-bold text-yellow-300 mb-2">
          {sitio.nombre}
        </h3>
        <p className="text-gray-300 mb-4">{sitio.descripcion}</p>

        <a
          href={sitio.url}
          target="_blank"
          className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Visitar sitio
        </a>
      </div>
    ))}
  </div>
</main>
  );
}