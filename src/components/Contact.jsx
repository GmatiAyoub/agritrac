import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import useReveal from '../hooks/useReveal'

const EMPTY = { name: '', company: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { t } = useLang()
  const leftRef = useReveal()
  const rightRef = useReveal()
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = t.req
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = t.inv
    if (!form.subject.trim()) err.subject = t.req
    if (!form.message.trim()) err.message = t.req
    setErrors(err)

    if (Object.keys(err).length === 0) {
      // TODO : brancher ici l'appel au backend (ex. fetch('/api/contact', ...))
      setSent(true)
      setForm(EMPTY)
    } else {
      setSent(false)
    }
  }

  const FieldError = ({ name }) => (errors[name] ? <em className="er">{errors[name]}</em> : null)

  return (
    <section id="contact" className="scroll-mt-16 bg-sand py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-5">
        <div ref={leftRef} className="rv lg:col-span-2">
          <h2 className="text-4xl font-extrabold text-forest sm:text-5xl">{t.cTitle}</h2>
          <p className="mt-6 text-ink/80">📍 <span>{t.cLoc}</span></p>
        </div>

        <div ref={rightRef} className="rv lg:col-span-3">
          <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-white p-8 shadow-xl">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold">
                <span>{t.cName}</span>
                <input name="name" value={form.name} onChange={onChange} className="fld" />
                <FieldError name="name" />
              </label>
              <label className="block text-sm font-semibold">
                <span>{t.cComp}</span>
                <input name="company" value={form.company} onChange={onChange} className="fld" />
              </label>
            </div>
            <label className="block text-sm font-semibold">
              <span>{t.cMail}</span>
              <input name="email" type="email" value={form.email} onChange={onChange} className="fld" />
              <FieldError name="email" />
            </label>
            <label className="block text-sm font-semibold">
              <span>{t.cSubj}</span>
              <input name="subject" value={form.subject} onChange={onChange} className="fld" />
              <FieldError name="subject" />
            </label>
            <label className="block text-sm font-semibold">
              <span>{t.cMsg}</span>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} className="fld" />
              <FieldError name="message" />
            </label>
            <button className="rounded-full bg-forest px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary">
              {t.cSend}
            </button>
            {sent && (
              <p role="status" className="rounded-lg bg-mist p-4 text-sm font-semibold text-forest">
                {t.ok}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
