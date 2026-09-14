import Image from "next/image";
import Link from "next/link";
import { BookingCalendar } from "./booking-calendar";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import styles from "./landing.module.css";

const brands = [
  ["perplexity", "Perplexity", 133.063, 28.8],
  ["openai", "OpenAI", 98.172, 26.4],
  ["oracle", "Oracle", 147.587, 19.2],
  ["indeed", "Indeed", 107.648, 28.8],
  ["stripe", "Stripe", 69.212, 28.8],
  ["14peaks", "14Peaks", 107.907, 28.8],
  ["sap", "SAP", 58.24, 28.8],
  ["fedex", "FedEx", 86.781, 24],
  ["nvidia", "NVIDIA", 130.4, 24.041],
  ["20vc", "20VC", 75.012, 22.8],
  ["cohen-circle", "Cohen Circle", 148.431, 28.8],
  ["y-combinator", "Y Combinator", 142.591, 28.8],
] as const;

function FooterLinks() {
  return (
    <>
      <a href="https://zalos.ai/">Back to Zalos.ai</a>
      <nav aria-label="Legal">
        <a href="https://www.zalos.ai/terms-conditions">Terms of Service</a>
        <a href="https://www.zalos.ai/privacy-policy">Privacy Policy</a>
      </nav>
    </>
  );
}

export function LandingPage() {
  return (
    <main className={styles["landing"]}>
      <section className={styles["intro"]} aria-labelledby="landing-title">
        <div className={styles["intro-top"]}>
          <Link href="/" className={styles["brand"]} aria-label="Zalos home">
            <Image src="/zalos-landing/brands/zalos.svg" alt="Zalos" width={172} height={48} priority />
          </Link>
        </div>
        <div className={styles["intro-copy"]}>
          <h1 id="landing-title">Finance Automation Workbench</h1>
          <p>
            Zalos AI Workers operate fragmented finance systems the way your team does,
            with tighter controls, accuracy &amp; auditability.
          </p>
        </div>
        <div className={styles["intro-bottom"]}>
          <footer className={styles["intro-footer"]}>
            <FooterLinks />
          </footer>
        </div>
      </section>
      <section className={styles["booking-panel"]} aria-label="Schedule a discovery call">
        <div className={styles["vertical-lines"]} aria-hidden="true">
          {Array.from({ length: 27 }, (_, index) => <span key={index} />)}
        </div>
        <div className={styles["booking-content"]}>
          <BookingCalendar />
          <div className={styles["trust"]}>
            <p>Trusted by:</p>
            <ul className={styles["trust-logos"]} aria-label="Trusted by">
              {brands.map(([slug, name, width, height]) => (
                <li key={slug} className={styles["trust-logo"]} data-brand={slug}>
                  <Image src={`/zalos-landing/brands/${slug}.svg`} alt={name} width={width} height={height}
                    style={{ width: `clamp(${width / 2}px, ${width / 25.6}vw, ${width}px)`, height: "auto" }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer className={styles["page-footer"]}>
        <FooterLinks />
      </footer>
    </main>
  );
}
