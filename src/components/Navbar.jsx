import { useLang } from '../i18n/LangContext'
import useScrolled from '../hooks/useScrolled'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const solid = useScrolled()
  const color = solid ? 'text-ink' : 'text-white'

  const links = [
    ['#services', t.nServ],
    ['#team', t.nTeam],
    ['#contact', t.nCont],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-sm backdrop-blur' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className={`text-xl font-extrabold tracking-tight ${solid ? 'text-forest' : 'text-white'}`}>
          Agri<span className="text-gold">Trac</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className={`text-sm font-semibold hover:text-gold ${color}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className={`flex gap-1 text-sm font-bold ${color}`}>
            {['en', 'fr'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded px-2 py-1 ${lang === l ? 'bg-gold text-forest' : 'opacity-70'}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:shadow-lg md:block"
          >
            {t.nCta}
          </a>
        </div>
      </nav>
    </header>
  )
}
