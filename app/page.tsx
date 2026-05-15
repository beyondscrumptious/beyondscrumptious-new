import Navbar from '../components/Navbar'

const cards = [
  'Luxury Celebration Cakes',
  'Mini Pancake Stations',
  'Wedding Desserts',
]

export default function HomePage() {
  return (
    <main className="bg-[#111111] text-white overflow-hidden">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.5em] text-sm mb-6 text-white/70">
            Luxury Dessert Experiences
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-6">
            Beyond
            <br />
            Scrumptious
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Eggless cakes, dessert stations and unforgettable event experiences crafted for weddings, birthdays and luxury celebrations.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#cakes"
              className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition"
            >
              Explore Cakes
            </a>

            <a
              href="https://instagram.com/beyond.scrumptious"
              target="_blank"
              className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section id="cakes" className="bg-[#F7F1EA] text-black py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center">
            Signature Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card}
                className="rounded-[2rem] overflow-hidden bg-white shadow-lg"
              >
                <div className="aspect-[4/5] bg-neutral-200" />

                <div className="p-8">
                  <h3 className="text-2xl mb-3">{card}</h3>

                  <p className="text-black/70">
                    Replace this section with your real photography and CMS images later.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="desserts" className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-white/50 mb-6">
            Events • Weddings • Corporate
          </p>

          <h2 className="text-5xl md:text-6xl mb-8">
            Live Dessert Stations
          </h2>

          <p className="text-white/70 text-lg leading-8">
            Mini pancakes, dessert tables and fully styled luxury setups designed to create unforgettable guest experiences.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#F7F1EA] text-black py-24 px-6 text-center">
        <h2 className="text-5xl mb-6">
          Let’s Create Something Scrumptious
        </h2>

        <p className="max-w-2xl mx-auto text-black/70 mb-10">
          Ready to plan your next celebration? Get in touch to discuss your event, desserts and custom setup.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:hello@beyondscrumptious.com"
            className="px-8 py-4 rounded-full bg-black text-white"
          >
            Email Us
          </a>

          <a
            href="https://instagram.com/beyond.scrumptious"
            target="_blank"
            className="px-8 py-4 rounded-full border border-black"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  )
}
