import { useLang } from '../i18n/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-forest">
      <svg
        className="absolute bottom-0 right-0 -z-10 h-full w-full opacity-20"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMaxYMax slice"
        aria-hidden="true"
      >
        <g stroke="#C9A45C" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M620 600 C625 470 615 380 640 290" />
          <path d="M640 290 C590 250 540 255 500 285 M640 290 C600 220 560 190 510 190 M640 290 C650 220 650 170 635 120 M640 290 C690 235 740 215 790 225 M640 290 C700 270 750 285 790 320" />
          <path d="M470 600 C475 520 468 460 485 400 M485 400 C450 375 415 378 390 398 M485 400 C470 350 440 330 405 330 M485 400 C505 355 540 340 575 345" />
        </g>
      </svg>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/90 to-primary/30" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-24">
        <p className="mb-5 text-sm font-bold uppercase tracking-widest text-gold">Kébili · Tunisia</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
          {t.hTitle}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">{t.hSub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#services" className="rounded-full bg-gold px-7 py-3.5 font-bold text-forest transition hover:-translate-y-0.5 hover:shadow-xl">
            {t.hC1}
          </a>
          <a href="#contact" className="rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10">
            {t.hC2}
          </a>
        </div>
      </div>
    </section>
  )
}
