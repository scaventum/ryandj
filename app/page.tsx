import { Russo_One } from "next/font/google";

import data from "@data/index";

import Icon from "@components/icon";
import Hero from "@sections/hero";
import SECTIONS from "@constants/sections";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  // helpers
  const sections = data.sections;
  const hero = sections.find(({ type }) => type === SECTIONS.HERO);

  return (
    <main className={["md:grid", "md:grid-cols-2"].join(" ")}>
      {hero && <Hero hero={hero.hero!} />}
      <section
        className={[
          "p-8",
          "sm:p-16",
          "flex",
          "flex-col",
          "gap-8",
          "md:gap-16",
          "h-screen",
          "bg-background-secondary",
        ].join(" ")}
      >
        <section
          className={[
            "flex-none",
            "rounded",
            "p-4",
            "bg-yellow-300",
            "flex",
            "gap-x-4",
            "items-center",
            "text-[#333333]",
          ].join(" ")}
        >
          <Icon style="fas" name="warning" size="2xl" />
          <div>
            <h3 className={[russoOne.className, "font-bold"].join(" ")}>
              Sorry for the inconvenience!
            </h3>
            <span>
              Design is currently underway. Here&apos;s the raw data in the
              meantime.
            </span>
          </div>
        </section>
        <section className={["grow", "min-h-0"].join(" ")}>
          <pre
            className={[
              "h-full",
              "w-full",
              "rounded",
              "bg-background",
              "p-4",
              "whitespace-pre-wrap",
              "break-all",
              "overflow-y-auto",
              "text-xs",
              "lg:text-lg",
            ].join(" ")}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </section>
      </section>
    </main>
  );
}
