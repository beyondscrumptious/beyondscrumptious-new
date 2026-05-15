import Navbar from '../components/Navbar'
import {client} from '../sanity/lib/client'
import {urlFor} from '../sanity/lib/image'

async function getProducts() {
  return client.fetch(`
    *[_type == "product" && featured == true]{
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
        </div>
      </section>

      <section className="bg-[#F7F1EA] text-black py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center">
            Featured Creations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <div
                key={product._id}
                className="rounded-[2rem] overflow-hidden bg-white shadow-lg"
              >
                <img
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  className="w-full aspect-[4/5] object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl mb-3">
                    {product.title}
                  </h3>

                  <p className="text-black/70">
                    {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}