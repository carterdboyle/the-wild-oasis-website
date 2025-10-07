import { Josefin_Sans } from "next/font/google";
import Script from "next/script";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis", //v1
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the italian Domites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <div
          id="desktop-gate"
          class="dg hidden"
          role="status"
          aria-live="polite"
        >
          <div class="dg-inner">
            <strong>Best viewed on a desktop</strong>
            <span class="dg-sub">
              This page isn’t optimized for phones/tablets.
            </span>
            <div class="dg-actions">
              <button id="dg-copy" type="button">
                Copy link
              </button>
              <button id="dg-continue" type="button">
                Continue
              </button>
            </div>
          </div>
        </div>

        <Script id="dg-wireup" strategy="afterInteractive">
          {`(function () {
            // Detect mobile-ish contexts (UA or coarse pointer or narrow viewport)
            const ua = navigator.userAgent || "";
            const isUA = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
            const isCoarse = window.matchMedia && matchMedia("(pointer: coarse)").matches;
            const isNarrow = Math.min(window.innerWidth, window.innerHeight) < 900;
            const isMobileLike = isUA || isCoarse || isNarrow;

            if (!isMobileLike) return; // desktop: do nothing

            // 1) Lock layout to desktop width (no shrink, allow horizontal scroll)
            document.documentElement.classList.add("mobile-locked");
            document.body.classList.add("mobile-locked");

            // 2) Show banner
            const gate = document.getElementById("desktop-gate");
            if (!gate) return;
            gate.classList.remove("hidden");
            document.documentElement.classList.add("dg-open");

            // Adjust top padding to exact banner height (in case fonts differ)
            const applyOffset = () => {
              document.body.style.paddingTop = gate.offsetHeight + "px";
            };
            applyOffset();
            window.addEventListener("resize", applyOffset);

            // 3) Wire up actions
            const copyBtn = document.getElementById("dg-copy");
            const contBtn = document.getElementById("dg-continue");

            if (copyBtn) {
              copyBtn.addEventListener("click", async () => {
                const url = location.href;
                try {
                  await navigator.clipboard.writeText(url);
                  copyBtn.textContent = "Copied!";
                  setTimeout(() => (copyBtn.textContent = "Copy link"), 1200);
                } catch {
                  prompt("Copy link:", url);
                }
              });
            }

            if (contBtn) {
              contBtn.addEventListener("click", () => {
                gate.classList.add("hidden");
                document.documentElement.classList.remove("dg-open");
                // Keep the desktop lock in place.
                document.body.style.paddingTop = "";
                window.removeEventListener("resize", applyOffset);
              });
            }
          })();`}
        </Script>
      </body>
    </html>
  );
}
