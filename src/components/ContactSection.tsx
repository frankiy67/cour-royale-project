import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";

// ── schema (sans sujet — pré-déterminé par formulaire) ───────────────────────

function buildSchema(t: (k: string) => string) {
  return z.object({
    "bot-field": z.string().max(0),
    nom:       z.string().min(1,  t("contact.err_nom")),
    email:     z.string().email(  t("contact.err_email")),
    telephone: z.string().optional(),
    message:   z.string().min(20, t("contact.err_message")),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

// ── contacts data ─────────────────────────────────────────────────────────────

const CONTACTS = [
  {
    icon:        "🏢",
    labelKey:    "bureaux_label",
    name:        "Bernard VALLAT",
    phoneMasked: "+33 6 •• •• •• ••",
    phone:       "+33 (0)6 07 08 80 79",
    phoneTel:    "tel:+33607088079",
    formName:    "contact-bureaux",
    sujet:       "bureaux",
    idPrefix:    "cf-b",
  },
  {
    icon:        "📋",
    labelKey:    "salles_label",
    name:        "Elisabeth FIXARI-VALLAT",
    phoneMasked: "+33 6 •• •• •• ••",
    phone:       "+33 (0)6 84 53 75 05",
    phoneTel:    "tel:+33684537505",
    formName:    "contact-salles",
    sujet:       "salles",
    idPrefix:    "cf-s",
  },
] as const;

// ── phone reveal ──────────────────────────────────────────────────────────────

function PhoneReveal({ phoneMasked, phone, phoneTel }: {
  phoneMasked: string;
  phone: string;
  phoneTel: string;
}) {
  const { t } = useTranslation();
  const [revealed, setReveal] = useState(false);

  return (
    <div className="mt-1 mb-1">
      <AnimatePresence mode="wait" initial={false}>
        {revealed ? (
          <motion.a
            key="revealed"
            href={phoneTel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="block font-inter text-accent hover:text-foreground transition-colors font-medium"
          >
            {phone}
          </motion.a>
        ) : (
          <motion.button
            key="masked"
            type="button"
            onClick={() => setReveal(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 font-inter text-muted-foreground hover:text-foreground transition-colors group"
            aria-label={t("contact.afficher_numero")}
          >
            <span>{phoneMasked}</span>
            <Eye size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── shared styles ─────────────────────────────────────────────────────────────

const inputCls =
  "w-full font-inter text-sm bg-background border border-border rounded-lg px-4 py-2.5 " +
  "placeholder:text-muted-foreground/60 text-foreground " +
  "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent " +
  "transition-colors";

const labelCls = "block font-inter text-xs uppercase tracking-widest text-muted-foreground mb-1.5";
const errorCls = "font-inter text-xs text-red-500 mt-1";

// ── inline contact form ───────────────────────────────────────────────────────

function ContactForm({ formName, sujet, idPrefix }: {
  formName: string;
  sujet: string;
  idPrefix: string;
}) {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = buildSchema(t);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { "bot-field": "" },
  });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const body = new URLSearchParams({
        "form-name": formName,
        sujet,
        ...Object.fromEntries(
          Object.entries(data).map(([k, v]) => [k, v ?? ""])
        ),
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-6 pt-6 border-t border-border">
      <p className="font-inter text-xs uppercase tracking-widest text-muted-foreground mb-5">
        {t("contact.form_titre")}
      </p>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-5"
          >
            <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
            <p className="font-inter text-sm text-green-800">{t("contact.succes")}</p>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-5"
          >
            <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
            <p className="font-inter text-sm text-red-800">{t("contact.erreur")}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        name={formName}
        data-netlify-honeypot="bot-field"
        noValidate
      >
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input {...register("bot-field")} tabIndex={-1} autoComplete="off" />
        </div>
        {/* Sujet caché — transmis avec la soumission */}
        <input type="hidden" name="sujet" value={sujet} />

        {/* Nom */}
        <div className="mb-4">
          <label htmlFor={`${idPrefix}-nom`} className={labelCls}>
            {t("contact.nom")} <span className="text-accent">*</span>
          </label>
          <input
            id={`${idPrefix}-nom`}
            {...register("nom")}
            placeholder={t("contact.nom_placeholder")}
            className={inputCls}
            autoComplete="name"
          />
          {errors.nom && <p className={errorCls}>{errors.nom.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor={`${idPrefix}-email`} className={labelCls}>
            {t("contact.email")} <span className="text-accent">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            {...register("email")}
            placeholder={t("contact.email_placeholder")}
            className={inputCls}
            autoComplete="email"
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>

        {/* Téléphone */}
        <div className="mb-4">
          <label htmlFor={`${idPrefix}-tel`} className={labelCls}>
            {t("contact.telephone")}
          </label>
          <input
            id={`${idPrefix}-tel`}
            type="tel"
            {...register("telephone")}
            placeholder={t("contact.telephone_placeholder")}
            className={inputCls}
            autoComplete="tel"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor={`${idPrefix}-msg`} className={labelCls}>
            {t("contact.message")} <span className="text-accent">*</span>
          </label>
          <textarea
            id={`${idPrefix}-msg`}
            {...register("message")}
            rows={4}
            placeholder={t("contact.message_placeholder")}
            className={`${inputCls} resize-y`}
          />
          {errors.message && <p className={errorCls}>{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="inline-flex items-center gap-2 font-inter text-sm font-medium
            bg-accent text-white px-6 py-2.5 rounded-lg
            hover:bg-accent/90 active:scale-[0.98]
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-all duration-200"
        >
          {status === "loading" && <Loader2 size={15} className="animate-spin" />}
          {status === "loading" ? t("contact.envoi_en_cours") : t("contact.envoyer")}
        </button>
      </form>
    </div>
  );
}

// ── main section ──────────────────────────────────────────────────────────────

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto px-6 py-10 md:py-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("contact.label")}
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px] mb-4">
            {t("contact.titre")}
          </h2>
          <p className="font-inter text-muted-foreground">{t("contact.adresse")}</p>
        </motion.div>

        {/* Colonnes : carte + formulaire intégré */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {CONTACTS.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Carte contact */}
              <span className="text-[40px] mb-4 block">{c.icon}</span>
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                {t(`contact.${c.labelKey}`)}
              </p>
              <h3 className="font-playfair text-foreground text-2xl mb-4">{c.name}</h3>
              <PhoneReveal
                phoneMasked={c.phoneMasked}
                phone={c.phone}
                phoneTel={c.phoneTel}
              />

              {/* Formulaire intégré */}
              <ContactForm
                formName={c.formName}
                sujet={c.sujet}
                idPrefix={c.idPrefix}
              />
            </motion.div>
          ))}
        </div>

        {/* Google Maps CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <a
            href="https://maps.app.goo.gl/HkFNm8q4cKfhznJB6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-inter text-sm border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all"
          >
            {t("contact.voir_maps")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
