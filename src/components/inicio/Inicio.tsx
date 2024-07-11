import LogoComponent from '@/components/header/LogoComponent'
import DesktopMenu from '@/components/header/DesktopMenu'
import MobileMenu from '@/components/header/MobileMenu'
import Image from 'next/image'
import ganhe from '@/assets/ganhe.png'
import bg from '@/assets/maria.png'
export default function Inicio() {
  return (
    <section className="w-full overflow-hidden bg-[#E87600]">
      <div
        className="container mx-auto min-h-[40vh] bg-contain bg-[right_-82px_top_90px] bg-no-repeat xsm:bg-[right_-41px_top_90px] msm:bg-[right_0px_top_90px]  md:min-h-[60vh] md:bg-[right_-41px_top_130px] lg:min-h-[90vh] lg:bg-[right_0px_top_150px] xl:bg-[right_80px_top_150px]"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <header className="mt-2 py-3">
          <nav className="container mx-auto flex items-center justify-between">
            <LogoComponent contentStyle="h-auto max-w-full min-w-[140px]" />
            <DesktopMenu
              containerSyles="hidden items-center justify-between lg:flex"
              linkStyles="rounded-md p-2 text-base text-[#E8E8E8] transition duration-500 hover:text-black hover:bg-[#E8E8E8] mx-1"
            />
            <MobileMenu containerStyle="block ml-2 lg:hidden" />
          </nav>
        </header>
        <div className="container mx-auto mt-14 px-4 sm:mt-10 md:mt-24 xl:mt-32">
          <h1 className="flex flex-col text-4xl font-extrabold uppercase tracking-wide text-[#373737] xsm:text-5xl msm:text-6xl sm:text-7xl lg:text-9xl">
            clube do <br />
            <span className="flex items-center">
              botox
              <Image
                src={ganhe}
                alt="ganhe"
                className="ml-1 h-full max-w-24 object-cover msm:max-w-40 sm:ml-3 sm:max-w-52 md:max-w-64 lg:max-w-72 xl:max-w-full"
              />
            </span>
          </h1>
          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-wide text-[#FFBCE5] xsm:text-4xl msm:text-5xl sm:text-6xl lg:text-7xl">
            ultraformer mpt
          </h2>
        </div>
      </div>
    </section>
  )
}
