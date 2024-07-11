import Inicio from '@/components/inicio/Inicio'
import Planos from '@/components/planos/Planos'
import SaibaMais from '@/components/saiba_mais/SaibaMais'
import Video from '@/components/section_video/Video'

export default function Home() {
  return (
    <main className="lg:max-w-full">
      <Inicio />
      <Video />
      <Planos />
      <SaibaMais />
    </main>
  )
}
