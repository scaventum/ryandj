import { Russo_One } from "next/font/google";

import type { IconProps } from "@components/icon";
import Icon from "@components/icon";

// fonts
const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

// proptypes
export type ListProps = {
  size?: string;
  icon?: IconProps;
  titling?: {
    title?: string;
    subtitle?: string;
  };
  listItems?: Array<{
    icon?: IconProps;
    title?: string;
  }>;
};

// component
const List = ({ size = "md", icon, titling, listItems }: ListProps) => {
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
      <div className={["flex", "gap-2", "items-center"].join(" ")}>
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
      <div className={["grid", "gap-4", "sm:gap-8"].join(" ")}>
        {listItems?.map(({ icon, title }, index) => (
          <div
            key={index}
            className={[
              "flex",
              "gap-4",
              "overflow-hidden",
              "h-full",
              "items-center",
            ].join(" ")}
          >
            <div className={["w-8"].join(" ")}>
              {icon && <Icon {...icon} size="lg" />}
            </div>
            <div>
              {title && <div className={["font-bold"].join(" ")}>{title}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
