'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447933903000"
      target="_blank"
      className="fixed bottom-6 right-6 z-[100] bg-[#202b45] hover:bg-[#8992a3] transition p-5 rounded-full shadow-2xl"
    >
      <FaWhatsapp className="text-3xl text-white" />
    </a>
  )
}