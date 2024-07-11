import Image from 'next/image'
import soninha from '@/assets/soninha.png'
import { Open_Sans as OpenSans } from 'next/font/google'
import Link from 'next/link'
import { Facebook, Instagram, Phone, Youtube } from 'lucide-react'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

export default function SaibaMais() {
  return (
    <section className="container mx-auto pb-16 pt-10">
      <div className="flex flex-col items-center">
        <h1 className="mb-8 text-3xl text-[#373737]">Quer saber mais?</h1>
        <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+clube+do+botox&type=phone_number&app_absent=0">
          <button
            className={`flex w-60 items-center justify-between rounded-full bg-gradient-to-r from-zinc-300 to-black text-white ${openSans.className} animate-scale pr-4`}
          >
            <Image
              alt="soninha"
              src={soninha}
              className="rounded-full bg-[#707070]"
            />
            Fale com a soninha!
          </button>
        </Link>
      </div>
      <div
        className={`mt-28 flex flex-col items-center justify-between gap-y-10 sm:flex-row sm:items-start ${openSans.className}`}
      >
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="mb-7 text-2xl font-bold">Endereços</h2>
          <h3 className="text-lg font-semibold">
            R. Padre Anchieta, 211 Bairro Ramos Viçosa - MG
          </h3>
          <h3 className="text-lg font-semibold">
            Av. Doutor josé Mariano, 431 loja 5 Bairro Ramos Ponte Nova
          </h3>
        </div>
        <div>
          <div className="mb-10 text-center">
            <h2 className="mb-7 text-2xl font-bold">Contatos</h2>
            <Link
              href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+clube+do+botox&type=phone_number&app_absent=0"
              className="flex items-center justify-center text-lg font-semibold"
            >
              <Phone className="mr-3 h-5 w-5" /> (31) 3891-2160
            </Link>
          </div>
          <div>
            <h2 className="mb-7 text-2xl font-bold">Acompanhe</h2>
            <div className="flex items-center justify-center gap-x-5">
              <Link href="https://www.instagram.com/sense.clinicamg/">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/sense.clinicamg/">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCHFK6Y44YnCXrL65fa9mBZA?sub_confirmation=1">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
