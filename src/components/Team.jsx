import { useLang } from '../i18n/LangContext'
import useReveal from '../hooks/useReveal'

const MEMBERS = ['Ayoub Gmati', 'Khalil Gdhami', 'Khalil Bahri', 'Maher Soula', 'Wissem Ghrissi']

function Member({ name }) {
  const ref = useReveal()
  const initials = name.split(' ').map((w) => w[0]).join('')
  return (
    <div ref={ref} className="rv text-center">
      <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-primary text-3xl font-extrabold ring-2 ring-gold/60 ring-offset-4 ring-offset-forest transition duration-300 hover:-translate-y-1 hover:bg-gold hover:text-forest">
        {initials}
      </div>
      <p className="mt-5 font-bold">{name}</p>
    </div>
  )
}

export default function Team() {
  const { t } = useLang()
  const headRef = useReveal()

  return (
    <section id="team" className="scroll-mt-16 bg-forest py-28 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div ref={headRef} className="rv">
          <p className="text-sm font-bold uppercase tracking-widest text-gold">{t.tEye}</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">{t.tTitle}</h2>
          <p className="mt-4 text-white/70">{t.tSub}</p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {MEMBERS.map((n) => (
            <Member key={n} name={n} />
          ))}
        </div>
      </div>
    </section>
  )
}
