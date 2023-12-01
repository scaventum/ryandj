import { Russo_One } from "next/font/google";

import type { IconProps } from "@components/icon";
import Icon from "@components/icon";

// fonts
const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

// proptypes
export type CategorisedItemsProps = {
  titling?: {
    title?: string;
    subtitle?: string;
  };
  items?: Array<{
    icon?: IconProps;
    label: string;
    rating?: number;
    items?: Array<{
      icon?: IconProps;
      label: string;
      rating?: number;
    }>;
  }>;
};

// component
const CategorisedItems = ({ titling, items }: CategorisedItemsProps) => {
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
      <div>
        {titling?.title && (
          <h3 className={[russoOne.className, "text-3xl"].join(" ")}>
            {titling.title.toUpperCase()}
          </h3>
        )}
        {titling?.subtitle && (
          <h4
            className={[russoOne.className, "text-xl", "text-accent"].join(" ")}
          >
            {titling.subtitle.toUpperCase()}
          </h4>
        )}
      </div>
      <div
        className={[
          "grid",
          "sm:grid-cols-3",
          "md:grid-cols-1",
          "lg:grid-cols-2",
          "xl:grid-cols-3",
          "gap-4",
          "sm:gap-8",
        ].join(" ")}
      >
        {items?.map(({ icon, label, items }, index) => (
          <div key={index} className={["flex", "flex-col", "gap-1"].join(" ")}>
            <div
              className={[
                "flex",
                "justify-start",
                "gap-2",
                "font-bold",
                "text-accent",
                "items-center",
              ].join(" ")}
            >
              <div className={["w-8"].join(" ")}>
                <Icon {...icon!} size="lg" />
              </div>
              <h4 className={[].join(" ")}>{label?.toUpperCase()}</h4>
            </div>
            <div
              key={index}
              className={["flex", "flex-col", "gap-1"].join(" ")}
            >
              {items?.map(({ icon, label }, index) => {
                return (
                  <div key={index} className={["flex", "flex-col"].join(" ")}>
                    {icon && (
                      <div className={["flex", "gap-2"].join(" ")}>
                        <div className={["w-8"].join(" ")}>
                          <Icon {...icon} size="lg" />
                        </div>
                        <span className={[].join(" ")}>{label}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorisedItems;
