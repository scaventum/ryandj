import { Russo_One } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

import data from "@data";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

const profileSection = data.sections.shift();

export default function Home() {
  return (
    <main className={["md:grid", "md:grid-cols-2"].join(" ")}>
      <section
        className={[
          "min-h-screen",
          "p-8",
          "sm:p-16",
          "flex",
          "items-start",
          "sm:items-center",
          "justify-center",
        ].join(" ")}
      >
        <div className={["w-full", "flex", "flex-col", "gap-8"].join(" ")}>
          <div className={["text-left", "w-full"].join(" ")}>
            <h1
              className={[
                russoOne.className,
                "text-5xl",
                "lg:text-6xl",
                "2xl:text-7xl",
              ].join(" ")}
            >
              {profileSection?.profile?.title.toUpperCase()}
            </h1>
            <h2
              className={[
                russoOne.className,
                "text-2xl",
                "lg:text-3xl",
                "2xl:text-4xl",
                "text-accent",
              ].join(" ")}
            >
              {profileSection?.profile?.subtitle.toUpperCase()}
            </h2>
            <p className={["w-full", "text-justify", "text-md"].join(" ")}>
              {profileSection?.profile?.introduction}
            </p>
          </div>
          <div
            className={[
              "grid",
              "sm:grid-cols-2",
              "md:grid-cols-1",
              "lg:grid-cols-2",
              "gap-4",
              "sm:gap-8",
            ].join(" ")}
          >
            {profileSection?.profile?.hightlightedItems?.map(
              ({ icon, label, rating }, index) => {
                const ratingWidth = `${rating * 10}%`;
                const iconStyle: IconPrefix = (icon.style ??
                  "fas") as IconPrefix;
                const iconName: IconName = icon.name as IconName;

                return (
                  <div
                    key={index}
                    className={["flex", "gap-2", "flex-col"].join(" ")}
                  >
                    <div
                      className={[
                        "flex",
                        "items-center",
                        "justify-between",
                      ].join(" ")}
                    >
                      <span className={["font-bold"].join(" ")}>{label}</span>
                      <div className={["text-right"].join(" ")}>
                        <FontAwesomeIcon
                          icon={[iconStyle, iconName]}
                          size="xl"
                        />
                      </div>
                    </div>
                    <div
                      className={[
                        "w-full",
                        "h-1",
                        "bg-background-secondary",
                      ].join(" ")}
                    >
                      <div
                        style={{ width: ratingWidth }}
                        className={["h-full", "bg-accent"].join(" ")}
                      ></div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
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
          <FontAwesomeIcon icon={["fas", "warning"]} size="2xl" />
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
              "border-2",
              "border-current",
              "border-solid",
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
