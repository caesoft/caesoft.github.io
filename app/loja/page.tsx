import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import LojaClient from "@/app/loja/LojaClient"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Loja",
  description: "Catálogo da Loja do CAESoft com seleção e pedido.",
}

export default function LojaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 container mx-auto px-4">
        <LojaClient />
      </main>
      <Footer />
    </>
  )
}