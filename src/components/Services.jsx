import { useLang } from '../i18n/LangContext'
import useReveal from '../hooks/useReveal'

function Row({ num, title, desc }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="rv group grid items-start gap-6 border-t border-forest/15 py-10 transition-colors hover:bg-mist/60 md:grid-cols-12 md:px-4"
    >
      <span className="text-5xl font-extrabold text-gold/70 md:col-span-2">{num}</span>
      <h3 className="text-2xl font-bold text-forest md:col-span-4">{title}</h3>
      <p className="max-w-xl leading-relaxed text-ink/75 md:col-span-6">{desc}</p>
    </div>
  )
}

export default function Services() {
  const { t } = useLang()
  const headRef = useReveal()

  const items = [
    ['01', t.s1t, t.s1d],
    ['02', t.s2t, t.s2d],
    ['03', t.s3t, t.s3d],
  ]

  return (
    <section id="services" className="scroll-mt-16 bg-white py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div ref={headRef} className="rv">
          <p className="text-sm font-bold uppercase tracking-widest text-gold">{t.sEye}</p>
          <h2 className="mt-3 text-4xl font-extrabold text-forest sm:text-5xl">{t.sTitle}</h2>
        </div>
        <div className="mt-16">
          {items.map(([n, title, desc]) => (
            <Row key={n} num={n} title={title} desc={desc} />
          ))}
          <p className="border-t border-forest/15 pt-6 text-sm text-ink/60">{t.sNote}</p>
        </div>
      </div>
    </section>
  )
}
