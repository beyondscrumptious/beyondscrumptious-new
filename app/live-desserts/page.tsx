'use client'

import Navbar from '../../components/Navbar'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function LiveDessertsPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Beyond Scrumptious
          </p>

          <h1 className="heading-font text-5xl md:text-8xl leading-tight mb-10">
            Live Dessert.
            <br />
            Live Reactions.
            <br />
            Live Joy.
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl leading-8 text-[#f8f8f8]/70">
            Bring the fun and the flavour to your next celebration with our Live Dutch Pancake Station — where fluffy, golden mini pancakes are cooked fresh on-site, filling the air with that irresistible aroma.
          </p>

        </div>
      </section>

      {/* VIDEOS */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source
                src="/videos/live1.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source
                src="/videos/live2.mp4"
                type="video/mp4"
              />
            </video>
          </div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              What's Included
            </p>

            <h2 className="heading-font text-5xl md:text-7xl mb-8">
              Every Setup Includes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                🥞 Mini Pancakes
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Soft, golden and freshly made before your guests.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                🍳 100% Eggless Batter
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Perfect for everyone to enjoy.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                🎡 Live Pancake Setup
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Compact, stylish and fully event-ready.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                🍬 Toppings & Sauces Bar
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Colourful, flavourful and impossible to resist.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TOPPINGS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              The Toppings Bar
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-10">
              Toppings That Make
              <br />
              It Irresistible
            </h2>

            <div className="grid grid-cols-2 gap-4 text-lg text-[#f8f8f8]/80">
              <div>Oreo Crumbs</div>
              <div>Biscoff Crumbs</div>
              <div>Mini Marshmallows</div>
              <div>Sprinkles</div>
              <div>Kunafa</div>
              <div>Chocolate Cake Pieces</div>
              <div>Fresh Fruits 🍓🥭</div>
              <div>Whipped Cream</div>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Sauces Selection
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-10">
              Sauce It Up —
              <br />
              Your Way
            </h2>

            <div className="grid grid-cols-2 gap-4 text-lg text-[#f8f8f8]/80">
              <div>Milk Chocolate</div>
              <div>White Chocolate</div>
              <div>Biscoff</div>
              <div>Cookies & Cream</div>
              <div>Pistachio</div>
              <div>Mango</div>
              <div>Salted Caramel</div>
              <div>Strawberry</div>
              <div>Dark Chocolate</div>
            </div>

            <p className="mt-8 text-[#cfd7e2]">
              ✨ Custom toppings and sauces available on request.
            </p>
          </div>

        </div>
      </section>

      {/* OCCASIONS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            Made For Every Occasion
          </p>

          <h2 className="heading-font text-5xl md:text-7xl mb-10">
            Luxury Dessert
            <br />
            Experiences
          </h2>

          <p className="text-lg leading-8 text-[#202b45]/70">
            Whether it’s an elegant wedding, a vibrant mehndi or a luxury birthday celebration, our Live Mini Pancake Station brings guests together through the love of dessert.
          </p>

        </div>
      </section>

      {/* ADD ONS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Make It Even More Special
            </p>

            <h2 className="heading-font text-5xl md:text-7xl">
              Premium Add-Ons
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#cfd7e2] text-[#202b45] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                ✨ Branded Setup
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Add your logo, colours or custom styling.
              </p>
            </div>

            <div className="bg-[#cfd7e2] text-[#202b45] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                🍰 Dessert Bar Add-On
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Pair pancakes with cupcakes, cheesecakes and dessert pots.
              </p>
            </div>

            <div className="bg-[#cfd7e2] text-[#202b45] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-3xl mb-4">
                🪩 Themed Presentation
              </h3>

              <p className="leading-8 text-[#202b45]/70">
                Custom signage, props and serving ware available.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-10">
            Book Your Live
            <br />
            Pancake Experience
          </h2>

          <p className="text-lg leading-8 text-[#202b45]/70 mb-12">
            Let’s make your event extra sweet — live and in the moment.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="mailto:hello@beyondscrumptious.com"
              className="px-10 py-5 rounded-full bg-[#202b45] text-[#f8f8f8] hover:bg-[#8992a3] transition"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-10 py-5 rounded-full border border-[#202b45]/20"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/beyond.scrumptious"
              target="_blank"
              className="px-10 py-5 rounded-full border border-[#202b45]/20"
            >
              Instagram
            </a>

          </div>

        </div>
      </section>
    </main>
  )
}