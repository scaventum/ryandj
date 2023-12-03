import { Russo_One } from "next/font/google";

import type { IconProps } from "@components/icon";
import Icon from "@components/icon";

// fonts
const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

// proptypes
export type HyperlinksProps = {
  size?: string;
  icon?: IconProps;
  titling?: {
    title?: string;
    subtitle?: string;
  };
  hyperlinks?: Array<{
    icon?: IconProps;
    title?: string;
    subtitle?: string;
    link?: string;
  }>;
};

// component
const Hyperlinks = ({
  size = "md",
  icon,
  titling,
  hyperlinks,
}: HyperlinksProps) => {
  let gridCols = ["sm:grid-cols-2", "md:grid-cols-1", "lg:grid-cols-2"];
  if (size === "sm") {
    gridCols = [
      "sm:grid-cols-3",
      "md:grid-cols-1",
      "lg:grid-cols-2",
      "xl:grid-cols-3",
    ];
  }

  return (
    <section
      className={[
        "p-8",
        "sm:p-16",
        "flex",
        "flex-col",
        "gap-4",
        "md:gap-8",
      ].join(" ")}
    >
      <div className={["flex", "gap-2"].join(" ")}>
        {icon && <Icon {...icon} size="2xl" />}
        <div>
          {titling?.title && (
            <h3 className={[russoOne.className, "text-3xl"].join(" ")}>
              {titling.title.toUpperCase()}
            </h3>
          )}
          {titling?.subtitle && (
            <h4
              className={[russoOne.className, "text-xl", "text-accent"].join(
                " "
              )}
            >
              {titling.subtitle.toUpperCase()}
            </h4>
          )}
        </div>
      </div>
      <div className={["grid", ...gridCols, "gap-4", "sm:gap-8"].join(" ")}>
        {hyperlinks?.map(({ icon, title, subtitle, link }, index) => (
          <a href={link} key={index} target="__blank">
            <div
              className={[
                "bg-background",
                "hover:bg-accent",
                "hover:text-background",
                "rounded",
                "p-4",
                "flex",
                "gap-4",
                "overflow-hidden",
                "h-full",
              ].join(" ")}
            >
              {icon && <Icon {...icon} size="lg" />}
              <div>
                {title && (
                  <div className={["font-bold"].join(" ")}>{title}</div>
                )}
                {subtitle && <div>{subtitle}</div>}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hyperlinks;
