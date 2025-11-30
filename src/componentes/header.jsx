import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const refNav = useRef(null);

  function switchNav() {
    refNav.current.classList.toggle("hidden");
  }

  return (
    <header className="bg-gradient-to-r from-black via-[#6708b5] to-black text-yellow-400 shadow-lg fixed w-full z-50">
  <div className="container mx-auto flex items-center justify-between px-6 py-2">
    <h1 className="text-xl font-extrabold tracking-wider hover:text-yellow-300 transition">
      👻 TerrorVerse
    </h1>
    
    <nav className="hidden md:flex gap-4 text-base">
      <a href="/" className="hover:text-violet-400 font-semibold transition">Inicio</a>
      <a href="/peliculas" className="hover:text-violet-400 font-semibold transition">Películas</a>
      <a href="/series" className="hover:text-violet-400 font-semibold transition">Series</a>
      <a href="/webgratis" className="hover:text-violet-400 font-semibold transition">Webs Gratis</a>
    </nav>

    <button className="md:hidden text-xl" onClick={switchNav}>
      <FaBars />
    </button>
  </div>

  <nav
    ref={refNav}
    className="hidden fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-2xl md:hidden"
  >
    <button
      className="absolute top-6 right-6 text-3xl"
      onClick={switchNav}
    >
      <FaTimes />
    </button>

    <a href="/" onClick={switchNav} className="hover:text-violet-400 font-semibold transition">Inicio</a>
    <a href="/peliculas" onClick={switchNav} className="hover:text-violet-400 font-semibold transition">Películas</a>
    <a href="/series" onClick={switchNav} className="hover:text-violet-400 font-semibold transition">Series</a>
    <a href="/webgratis" onClick={switchNav} className="hover:text-violet-400 font-semibold transition">Webs Gratis</a>
  </nav>
</header>
  );
}