export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-12 py-8 backdrop-blur-md bg-[#202b45]/20">
      <h1 className="logo-font text-3xl md:text-4xl">
        Beyond Scrumptious
      </h1>

      <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.3em] text-[#f8f8f8]/80">
        <a href="#cakes">Cakes</a>
        <a href="#desserts">Desserts</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}