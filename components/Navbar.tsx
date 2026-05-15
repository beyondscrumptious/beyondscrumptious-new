export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-black/20 backdrop-blur-md">
      <h1 className="text-xl tracking-[0.3em] uppercase">
        Beyond Scrumptious
      </h1>

      <div className="flex gap-6 text-sm uppercase tracking-widest">
        <a href="#cakes">Cakes</a>
        <a href="#desserts">Desserts</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
