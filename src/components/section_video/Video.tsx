'use client'
import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import YouTube, { YouTubeProps } from 'react-youtube'

import { Open_Sans as OpenSans } from 'next/font/google'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo()
}
const opts: YouTubeProps['opts'] = {
  playerVars: {
    autoplay: 1,
    start: 0,
  },
}

export default function Video() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="container mx-auto flex  flex-col items-center justify-center py-32 lg:flex-row  lg:justify-around xl:justify-between">
        <m.div
          className="md:0 mx-1 mb-10 flex flex-col"
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[26px] font-thin tracking-wider text-[#E87600] xsm:text-4xl msm:mb-2 msm:text-5xl xl:text-7xl">
            ENTENDA EM 1 MINUTO
          </h1>
          <h1
            className="text-[40px] font-thin tracking-wider text-[#E87600] xsm:text-5xl
        msm:text-7xl xl:text-[110px]"
          >
            PORQUE BOTOX
          </h1>
          <div className="mb-6 flex md:self-end">
            <h1 className="text-[45px] font-thin tracking-wider text-[#E87600] xsm:mt-4  xsm:text-7xl msm:mt-6  msm:text-[110px] xl:text-[110px]">
              NÃO É
            </h1>
            <span className="ml-6 text-3xl leading-none tracking-wider text-[#373737] xsm:mt-2 xsm:text-[40px]  msm:text-[69px]">
              tudo <br />
              igual
            </span>
          </div>
          <Link
            href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+clube+do+botox&type=phone_number&app_absent=0"
            className={`tracking-bounce animate-scale bg-[#E87600] px-8 py-3 text-center text-xs font-medium uppercase text-white xsm:py-4 xsm:text-lg sm:px-20 lg:self-end ${openSans.className}`}
          >
            quero mais informações
          </Link>
        </m.div>
        <div className="w-full max-w-[600px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
          <YouTube
            videoId="wcKbehJ-hjE"
            opts={opts}
            onReady={onPlayerReady}
            className="h-[360px]"
          />
        </div>
      </section>
    </LazyMotion>
  )
}
