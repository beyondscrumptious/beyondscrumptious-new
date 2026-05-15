import Navbar from '../../components/Navbar'
import WhatsAppButton from '../../components/WhatsAppButton'
import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'

async function getProducts() {
  return client.fetch(`
    *[_type == "product"] | order(_createdAt desc){
      _id,
      title,
      category,
      image
    }
  `)
}

export default async function GalleryPage() {
  const products = await getProducts()

  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-24 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
          Our Work
        </p>

        <h1 className="heading-font text-6xl md:text-8xl mb-8">
          Gallery
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
          Explore handcrafted eggless cakes, dessert tables and luxury event setups created for weddings, birthdays, mehndis and unforgettable celebrations.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto columns-1 md:columns-3 gap-6 space-y-6">
          {products.map((product: any) => (
            <div
              key={product._id}
              className="break-inside-avoid overflow-hidden rounded-[2rem] shadow-2xl bg-[#f8f8f8]"
            >
              <img
                src={urlFor(product.image).url()}
                alt={product.title}
                className="w-full hover:scale-[1.02] transition duration-300"
              />

              <div className="p-6 text-[#202b45]">
                <h2 className="heading-font text-2xl mb-2">
                  {product.title}
                </h2>

                <p className="uppercase tracking-[0.2em] text-sm text-[#202b45]/60">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}