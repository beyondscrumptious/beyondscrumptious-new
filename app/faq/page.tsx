'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import WhatsAppButton from '../../components/WhatsAppButton'

const faqs = [
  {
    question: 'How far in advance should I place my order?',
    answer:
      'We recommend placing your order at least 2 weeks in advance, especially for custom cakes and event orders. For smaller items, we may have limited availability on shorter notice — it’s always worth asking! We can accommodate last-minute requests depending on our schedule and at our discretion.',
  },

  {
    question: 'How do I place an order?',
    answer:
      'You can contact us via WhatsApp, Email or Instagram DM to discuss your ideas. We’ll confirm availability, finalise details, and send payment info to secure your booking.',
  },

  {
    question: 'Can I customise my cake or desserts?',
    answer:
      'Absolutely! Every cake and dessert is made to order, so you can personalise flavours, colours, themes, and designs to match your occasion perfectly.',
  },

  {
    question: 'Are all your cakes and desserts eggless?',
    answer:
      'Yes — everything from Beyond Scrumptious is 100% eggless. Always has been, always will be.',
  },

  {
    question: 'Do you offer vegan options?',
    answer:
      'We may be able to accommodate limited vegan requests depending on availability. Please mention it when enquiring.',
  },

  {
    question: 'What flavours do you offer?',
    answer:
      'We have a wide range of flavours for cakes and desserts — including chocolate, vanilla, Biscoff, Oreo, Ferrero Rocher, pistachio, and more. Get in touch or check out our flavours page for more info.',
  },

  {
    question: 'Where are you based?',
    answer:
      'We’re located in Queensbury, Harrow. Full address and pickup details will be shared once your order is confirmed.',
  },

  {
    question: 'How should I transport or store my cake?',
    answer:
      'Place the cake box on an even surface, such as the trunk or floor in front of the passenger seat if travelling alone. Secure the cake box carefully to prevent movement or sliding. Drive slowly and carefully, avoiding bumps, and use air-conditioning where possible. Cakes should be refrigerated upon arrival and removed approximately one hour before cutting. Leftover cake should be stored in an airtight container.',
  },

  {
    question: 'What events do you cater for?',
    answer:
      'Our Live Mini Pancake Station is perfect for weddings, mehndis, birthdays, corporate events, garden parties, and more — indoors or outdoors.',
  },

  {
    question: 'What’s included in the Live Dessert setup?',
    answer:
      'We bring the full experience — pancake griddle, toppings & sauces bar, luxury presentation and our freshly prepared eggless desserts, all served by our friendly team.',
  },

  {
    question: 'How do I book the Live Pancake Station?',
    answer:
      'Simply contact us via WhatsApp, Instagram or Email with your event type, date and location. We’ll send package details and confirm availability.',
  },

  {
    question: 'What payment methods do you accept?',
    answer:
      'We currently accept bank transfer payments unless otherwise agreed.',
  },

  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations within 2 days of collection are non-refundable. Please refer to our Terms & Conditions page for full details.',
  },

  {
    question: 'Didn’t Find What You’re Looking For?',
    answer:
      'We’re always happy to help! Email us at hello@beyondscrumptious.com or contact us through Instagram or WhatsApp.',
  },
]
export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Beyond Scrumptious
            </p>

            <h1 className="heading-font text-5xl md:text-7xl mb-8">
              Frequently Asked Questions
            </h1>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              Everything you need to know before placing your order.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-8 shadow-xl"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="heading-font text-2xl md:text-3xl pr-8">
                    {faq.question}
                  </h2>

                  <span className="text-3xl">
                    {open === i ? '−' : '+'}
                  </span>
                </button>

                {open === i && (
                  <p className="mt-6 leading-8 text-[#202b45]/80 text-lg">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}