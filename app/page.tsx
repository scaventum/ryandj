import data from "@data/index";
import SECTION_TYPES from "@constants/sections";

import CategorisedItems from "@sections/categorisedItems";
import Hero from "@sections/hero";
import Timeline from "@sections/timeline";

export default function Home() {
  // helpers
  const sections = data.sections;
  const hero = sections.find(({ type }) => type === SECTION_TYPES.HERO);

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
          if (section.type === SECTION_TYPES.CATEGORISED_ITEMS) {
            return (
              <CategorisedItems
                key={index}
                icon={section.icon}
                titling={section.titling}
                items={section.categorisedItems}
              />
            );
          } else if (section.type === SECTION_TYPES.TIMELINE) {
            return (
              <Timeline
                key={index}
                icon={section.icon}
                titling={section.titling}
                items={section.timelineItems}
              />
            );
          }
        })}
      </section>
    </main>
  );
}
