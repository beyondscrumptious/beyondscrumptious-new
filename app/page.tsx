import Navbar from '../components/Navbar'
import {client} from '../sanity/lib/client'
import {urlFor} from '../sanity/lib/image'
import WhatsAppButton from '../components/WhatsAppButton'

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
    <main className="bg-[#202b45] text-[#f8f8f8] overflow-hidden">
      <Navbar />
      <WhatsAppButton />

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
            Luxury eggless cakes, dessert tables and unforgettable event
            experiences crafted for weddings, birthdays and premium
            celebrations.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        id="cakes"
        className="bg-[#cfd7e2] text-[#202b45] py-28 px-6"
      >
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

      {/* BRAND STORY */}
      <section className="py-32 px-6 bg-[#202b45] text-[#f8f8f8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Egg-Free Delights Made To Impress
            </p>

            <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
              Sweet Moments,
              <br />
              Beautifully Served
            </h2>

            <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-8">
              Welcome to Beyond Scrumptious — home of handcrafted eggless
              cakes, cupcakes, cheesecakes and luxury desserts.
            </p>

            <p className="uppercase tracking-[0.3em] text-sm text-[#cfd7e2]">
              Eggless • Custom Made • Fresh Quality Ingredients
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Cakes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="bg-[#cfd7e2] py-32 px-6 text-[#202b45]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Our Work
            </p>

            <h2 className="heading-font text-5xl md:text-7xl mb-8">
              Cakes That Steal
              <br />
              The Spotlight
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-[#202b45]/70">
              Elegant wedding cakes, themed birthday creations and luxury
              dessert styling designed to become the centrepiece of every
              celebration.
            </p>
          </div>

          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {products.map((product: any) => (
              <img
                key={product._id}
                src={urlFor(product.image).url()}
                alt={product.title}
                className="w-full rounded-[2rem] shadow-xl hover:scale-[1.02] transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESSERT TABLE SETUPS */}
      <section
        id="desserts"
        className="py-32 px-6 bg-[#202b45] text-[#f8f8f8]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Weddings • Mehndis • Luxury Events
            </p>

            <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
              Dessert Table
              <br />
              Setups
            </h2>

            <p className="text-[#f8f8f8]/70 leading-8 text-lg mb-8">
              Elegant dessert table styling curated beautifully for weddings,
              birthdays, mehndis and premium celebrations.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 text-sm uppercase tracking-[0.2em] text-[#cfd7e2]">
              <div>🍰 Luxury Desserts</div>
              <div>✨ Elegant Styling</div>
              <div>🍓 Fresh Handmade Treats</div>
              <div>🎉 Event Ready Setup</div>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop"
              alt="Dessert Table Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* LIVE DESSERT STATIONS */}
      <section className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div className="rounded-[2rem] overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1600&auto=format&fit=crop"
              alt="Live Dessert Station"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              NEW! | Live Mini Pancake Stations
            </p>

            <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
              Live Dessert
              <br />
              Stations
            </h2>

            <p className="text-[#202b45]/70 leading-8 text-lg mb-8">
              Freshly made mini pancakes cooked live in front of your guests
              with luxury toppings, sauces and interactive presentation
              designed to create unforgettable moments.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 text-sm uppercase tracking-[0.2em] text-[#202b45]">
              <div>🥞 Fresh Mini Pancakes</div>
              <div>🍫 Luxury Sauces</div>
              <div>🍓 Fresh Fruit Toppings</div>
              <div>🎉 Live Interactive Setup</div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#202b45] text-[#f8f8f8] rounded-full hover:bg-[#8992a3] transition"
              >
                Book Your Event
              </a>

              <a
                href="https://instagram.com/beyond.scrumptious"
                target="_blank"
                className="px-8 py-4 border border-[#202b45]/20 rounded-full hover:bg-[#8992a3] hover:text-white transition"
              >
                View Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#202b45] text-[#f8f8f8] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Client Love
          </p>

          <h2 className="heading-font text-5xl md:text-6xl mb-16">
            Sweet Words
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-10 shadow-lg">
              <p className="leading-8 mb-6">
                “The dessert station completely transformed our wedding.”
              </p>

              <h3 className="heading-font text-2xl">
                Priya & Sam
              </h3>
            </div>

            <div className="bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-10 shadow-lg">
              <p className="leading-8 mb-6">
                “The cakes looked unreal and tasted even better.”
              </p>

              <h3 className="heading-font text-2xl">
                Aisha Patel
              </h3>
            </div>

            <div className="bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-10 shadow-lg">
              <p className="leading-8 mb-6">
                “Professional, luxury and genuinely unforgettable.”
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
        className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            Let’s Create Something Scrumptious
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-10">
            Enquire About Your Event
          </h2>

          <p className="text-[#202b45]/70 text-lg leading-8 max-w-2xl mx-auto mb-14">
            From intimate celebrations to luxury weddings and branded
            events, we create dessert experiences tailored to your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:hello@beyondscrumptious.com"
              className="px-10 py-5 rounded-full bg-[#202b45] text-[#f8f8f8] text-sm uppercase tracking-[0.2em] hover:bg-[#8992a3] transition"
            >
              Email Us
            </a>

            <a
              href="https://instagram.com/beyond.scrumptious"
              target="_blank"
              className="px-10 py-5 rounded-full border border-[#202b45]/20 text-sm uppercase tracking-[0.2em]"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-10 py-5 rounded-full border border-[#202b45]/20 text-sm uppercase tracking-[0.2em]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}