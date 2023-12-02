import { Russo_One } from "next/font/google";

import type { IconProps } from "@components/icon";
import Icon from "@components/icon";

// fonts
const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

// proptypes
export type HyperlinksProps = {
  icon?: IconProps;
  titling?: {
    title?: string;
    subtitle?: string;
  };
  hyperlinks?: Array<{
    icon?: IconProps;
    title: string;
    link?: string;
  }>;
};

// component
const Hyperlinks = ({ icon, titling, hyperlinks }: HyperlinksProps) => {
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
      <div className={["flex", "flex-col", "gap-4", "sm:gap-8"].join(" ")}>
        {hyperlinks?.map(({ icon, title, link }, index) => (
          <div key={index} className={[""].join(" ")}>
            {icon && <Icon {...icon} size="lg" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hyperlinks;
