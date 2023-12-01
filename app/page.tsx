import data from "@data/index";
import SECTIONS from "@constants/sections";

import Hero from "@sections/hero";
import CategorisedItems from "@sections/categorisedItems";

export default function Home() {
  // helpers
  const sections = data.sections;
  const hero = sections.find(({ type }) => type === SECTIONS.HERO);

  return (
    <main className={["md:grid", "md:grid-cols-2"].join(" ")}>
      {hero && <Hero hero={hero.hero!} />}
      <section
        className={[
          "flex",
          "flex-col",
          "md:h-screen",
          "bg-background-secondary",
          "md:overflow-auto",
        ].join(" ")}
      >
        {sections.map((section, index) => {
          if (section.type === SECTIONS.CATEGORISED_ITEMS) {
            return (
              <CategorisedItems
                key={index}
                icon={section.icon}
                titling={section.titling}
                items={section.categorisedItems}
              />
            );
          }
        })}
      </section>
    </main>
  );
}
