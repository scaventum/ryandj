import { Russo_One } from "next/font/google";

import type { IconProps } from "@components/icon";
import Icon from "@components/icon";

// fonts
const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

// proptypes
export type HeroProps = {
  hero: {
    title: string;
    subtitle?: string;
    introduction?: string;
    hightlightedItems?: Array<{
      icon?: IconProps;
      label: string;
      rating?: number;
    }>;
  };
};

const Hero = ({ hero }: HeroProps) => {
  // destructors
  const { title, subtitle, introduction, hightlightedItems } = hero;

  // component
  return (
    <section
      className={[
        "min-h-screen",
        "p-8",
        "sm:p-16",
        "flex",
        "items-center",
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
            {title.toUpperCase()}
          </h1>
          {subtitle && (
            <h2
              className={[
                russoOne.className,
                "text-2xl",
                "lg:text-3xl",
                "2xl:text-4xl",
                "text-accent",
              ].join(" ")}
            >
              {subtitle.toUpperCase()}
            </h2>
          )}
          {introduction && (
            <p className={["w-full", "text-justify", "text-md"].join(" ")}>
              {introduction}
            </p>
          )}
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
          {hightlightedItems?.map(({ icon, label, rating }, index) => {
            const ratingWidth = `${rating ? rating * 10 : 0}%`;

            return (
              <div
                key={index}
                className={["flex", "gap-2", "flex-col"].join(" ")}
              >
                <div
                  className={["flex", "items-end", "justify-between"].join(" ")}
                >
                  <span className={["font-bold"].join(" ")}>{label}</span>
                  <div className={["text-right"].join(" ")}>
                    {icon && <Icon {...icon} size="lg" />}
                  </div>
                </div>
                {rating && (
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
