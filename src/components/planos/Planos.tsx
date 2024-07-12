import { Open_Sans as OpenSans } from 'next/font/google'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import robo from '@/assets/robo.png'
import Link from 'next/link'
import Image from 'next/image'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})
export default function Planos() {
  return (
    <section className=" w-full overflow-hidden bg-[#E87600] py-12">
      <div className="container relative mx-auto text-center">
        <div className="mb-10 w-full">
          <h1 className="mb-5 text-2xl font-thin uppercase tracking-wider text-[#FFBCE5] xsm:text-3xl msm:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            ASSINANTES <span className="mb-2 text-[#373737]">MC 2</span> E
            <span className="text-[#373737]"> MC 3</span> GANHAM
            <br className="hidden md:block" /> 1 SESSÃO DE ULTRAFORMER MPT
          </h1>
        </div>
        <div
          className={`flex w-full flex-wrap justify-evenly gap-x-10 gap-y-10  ${openSans.className} z-10`}
        >
          <div>
            <Card className="min-h-[570px] w-full bg-white text-center tracking-wide xsm:w-[350px]">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-[#FF293A]">
                  MC1
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    1 APLICAÇÃO DE BOTOX
                  </span>
                  <span>em até 12 meses</span>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <Check className="h-12 w-12 font-bold text-[#FF293A]" />
                  <h1 className="text-sm font-bold uppercase">
                    descontos exclusivo em planos de tratamentos
                  </h1>
                </div>
                <div className="mt-2 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className=" text-sm font-bold uppercase">
                    agendamento preferencial
                  </h1>
                </div>
                <div className="mt-56">
                  <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+clube+do+botox&type=phone_number&app_absent=0">
                    <button className="animate-scale rounded-full bg-[#FF293A] px-3 py-3 text-base font-semibold uppercase text-white xsm:px-7 xsm:text-lg">
                      quero assinar
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="min-h-[570px] w-full bg-white text-center tracking-wide xsm:w-[350px]">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-[#FF293A]">
                  MC2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    2 APLICAÇÃO DE BOTOX
                  </span>
                  <span>em até 12 meses</span>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <Check className="h-12 w-12 font-bold text-[#FF293A]" />
                  <h1 className="text-sm font-bold uppercase">
                    descontos exclusivo em planos de tratamentos
                  </h1>
                </div>
                <div className="mt-5 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className=" text-sm font-bold uppercase">
                    agendamento preferencial
                  </h1>
                </div>
                <div className="mt-5 animate-bounce">
                  <span className="rounded-2xl bg-[#E87600] px-2 py-2 text-sm font-bold uppercase text-white xsm:px-7 xsm:text-xl">
                    presente exclusivo
                  </span>
                </div>
                <div className="mt-5 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className=" text-sm font-bold uppercase">
                    1 sessão de ultraform mpt
                  </h1>
                </div>
                <div className="mt-[115px]">
                  <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+clube+do+botox&type=phone_number&app_absent=0">
                    <button className="animate-scale rounded-full bg-[#FF293A] px-3 py-3 text-base font-semibold uppercase text-white xsm:px-7 xsm:text-lg">
                      quero assinar
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="min-h-[570px] w-full bg-white text-center tracking-wide xsm:w-[350px]">
              <CardHeader>
                <CardTitle className="text-6xl font-bold text-[#FF293A]">
                  MC3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    2 APLICAÇÃO DE BOTOX
                  </span>
                  <span>em até 12 meses</span>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <Check className="h-12 w-12 font-bold text-[#FF293A]" />
                  <h1 className="text-sm font-bold uppercase">
                    descontos exclusivo em planos de tratamentos
                  </h1>
                </div>
                <div className="mt-5 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className=" text-sm font-bold uppercase">
                    agendamento preferencial
                  </h1>
                </div>
                <div className="mt-5 animate-bounce ">
                  <span className="rounded-2xl bg-[#E87600] px-2 py-2 text-sm font-bold uppercase text-white xsm:px-7 xsm:text-xl">
                    presente exclusivo
                  </span>
                </div>
                <div className="mt-5 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className=" text-sm font-bold uppercase">
                    1 sessão de ultraform mpt
                  </h1>
                </div>
                <div className="mt-2 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className="text-sm font-bold uppercase">
                    1 produto da linha skincare mc
                  </h1>
                </div>
                <div className="mt-2 flex items-center">
                  <Check className="h-8 w-8 font-bold text-[#FF293A]" />
                  <h1 className=" text-sm font-bold uppercase">
                    1 kit de boas vindas
                  </h1>
                </div>
                <div className="mt-10">
                  <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+clube+do+botox&type=phone_number&app_absent=0">
                    <button className="animate-scale rounded-full bg-[#FF293A] px-3 py-3 text-base font-semibold uppercase text-white xsm:px-7 xsm:text-lg">
                      quero assinar
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Image
          src={robo}
          alt="robô"
          className="absolute -bottom-14 -left-32 z-0 h-auto max-w-[83%] xsm:max-w-[65%] sm:-left-0 sm:max-w-[42%]  md:-bottom-20 xlg:-left-32 xlg:max-w-[30%]  2xl:-bottom-32 2xl:-right-48 2xl:max-w-[25%]"
        />
      </div>
    </section>
  )
}
