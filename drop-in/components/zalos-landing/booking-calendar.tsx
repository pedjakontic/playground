"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "./landing.module.css";

// This is the existing Zalos event from the demo supplied as the reference.
const bookingUrl = "https://calendly.com/zalos/discovery-call";
const embedUrl = `${bookingUrl}?hide_event_type_details=1&background_color=ffffff&text_color=111111&primary_color=0a3d32`;

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
  };
};

export function BookingCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");

  useEffect(() => {
    const timeout = window.setTimeout(() => setStatus("unavailable"), 15000);
    function onCalendlyMessage(event: MessageEvent) {
      const frame = containerRef.current?.querySelector("iframe");
      if (event.origin !== "https://calendly.com" || event.source !== frame?.contentWindow) return;
      if (typeof event.data?.event !== "string" || !event.data.event.startsWith("calendly.")) return;
      window.clearTimeout(timeout);
      setStatus("ready");
    }
    window.addEventListener("message", onCalendlyMessage);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("message", onCalendlyMessage);
    };
  }, []);

  function initializeCalendar() {
    const container = containerRef.current;
    const calendly = (window as CalendlyWindow).Calendly;
    if (!container || !calendly || container.querySelector("iframe")) return;
    calendly.initInlineWidget({ url: embedUrl, parentElement: container });
    const frame = container.querySelector("iframe");
    if (frame) frame.title = "Book a Zalos discovery call — choose a date and time";
  }

  return (
    <div className={styles["booking"]}>
      <div className={styles["calendar-card"]}>
        <div className={styles["calendar-frame"]}>
          <div className={styles["calendar-embed"]} ref={containerRef} style={{ visibility: status === "unavailable" ? "hidden" : "visible" }} />
        </div>
        {status === "unavailable" && (
          <div className={styles["calendar-unavailable"]} role="status">
            <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="10" width="34" height="32" rx="4" /><path d="M7 20h34M16 5v10M32 5v10M16 29h4M28 29h4M16 35h4" /></svg>
            <h2>Find a time to talk.</h2>
            <p>The embedded calendar isn’t loading here. You can view available times directly on Calendly.</p>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Open booking calendar <span aria-hidden="true">↗</span></a>
          </div>
        )}
        <noscript>
          <p className={styles["calendar-loading"]}>
            Enable JavaScript or <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open the booking calendar</a> to book a call.
          </p>
        </noscript>
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onReady={initializeCalendar}
        onError={() => setStatus("unavailable")}
      />
    </div>
  );
}
