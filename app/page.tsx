import Navbar from '../components/Navbar'
import {client} from '../sanity/lib/client'
import {urlFor} from '../sanity/lib/image'

async function getProducts() {
  return client.fetch(`
    *[_type == "product" && featured == true][0...6]{
      _id,
      title,
      category,
      image
    }
  `)
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <main className="bg-[#111111] text-[#f8f8f8] overflow-hidden">
      <Navbar />

      {/* HERO */}
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

        <div className="absolute inset-0 bg-[#202b45]/60" />

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-sm mb-6 text-[#f8f8f8]/70">
            Luxury Dessert Experiences
          </p>

          <h1 className="logo-font text-7xl md:text-[10rem] leading-[0.9] mb-8">
            Beyond
            <br />
            Scrumptious
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#f8f8f8]/80 leading-8">
            Luxury eggless cakes, dessert tables and unforgettable event experiences crafted for weddings, birthdays and premium celebrations.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="cakes" className="bg-[#cfd7e2] text-black py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-font text-5xl md:text-6xl mb-16 text-center">
            Featured Creations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <div
                key={product._id}
                className="rounded-[2rem] overflow-hidden bg-[#f8f8f8] shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  className="w-full aspect-[4/5] object-cover"
                />

                <div className="p-8">
                  <h3 className="heading-font text-3xl mb-3">
                    {product.title}
                  </h3>

                  <p className="text-[#202b45]/70 uppercase tracking-[0.2em] text-sm">
                    {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="desserts"
        className="py-32 px-6 bg-[#111111] text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-white/50 mb-6">
              Weddings • Corporate • Events
            </p>

            <h2 className="heading-font text-5xl md:text-6xl leading-tight mb-8">
              Live Dessert Stations
            </h2>

            <p className="text-[#f8f8f8]/70 leading-8 text-lg mb-8">
              From mini pancake stations to luxury dessert tables, Beyond Scrumptious creates unforgettable guest experiences designed around your celebration.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://instagram.com/beyond.scrumptious"
                target="_blank"
                className="px-8 py-4 bg-[#202b45] text-white rounded-full hover:bg-[#8992a3] transition"
              >
                View Instagram
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-white rounded-full"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop"
              alt="Dessert Table"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#cfd7e2] text-black py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-black/50 mb-6">
            Client Love
          </p>

          <h2 className="heading-font text-5xl md:text-6xl mb-16">
            Sweet Words
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-lg">
              <p className="text-[#202b45]/70 leading-8 mb-6">
                “The dessert station completely transformed our wedding. Every single guest was obsessed.”
              </p>

              <h3 className="heading-font text-2xl">
                Priya & Sam
              </h3>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-lg">
              <p className="text-[#202b45]/70 leading-8 mb-6">
                “The cakes looked unreal and tasted even better. Beyond Scrumptious always exceeds expectations.”
              </p>

              <h3 className="heading-font text-2xl">
                Aisha Patel
              </h3>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-lg">
              <p className="text-[#202b45]/70 leading-8 mb-6">
                “Professional, luxury and genuinely unforgettable. The setup was stunning.”
              </p>

              <h3 className="heading-font text-2xl">
                Luxe Events UK
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 bg-[#111111] text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-white/50 mb-6">
            Let’s Create Something Scrumptious
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-10">
            Enquire About Your Event
          </h2>

          <p className="text-[#f8f8f8]/70 text-lg leading-8 max-w-2xl mx-auto mb-14">
            From intimate celebrations to luxury weddings and branded events, we create dessert experiences tailored to your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:hello@beyondscrumptious.com"
              className="px-10 py-5 rounded-full bg-[#202b45] text-white text-sm uppercase tracking-[0.2em] hover:bg-[#8992a3] transition"
            >
              hello@beyondscrumptious.com
            </a>

            <a
              href="https://instagram.com/beyond.scrumptious"
              target="_blank"
              className="px-10 py-5 rounded-full border border-white text-sm uppercase tracking-[0.2em]"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-10 py-5 rounded-full border border-white text-sm uppercase tracking-[0.2em]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}