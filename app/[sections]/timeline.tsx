import { Russo_One } from "next/font/google";

import type { IconProps } from "@components/icon";
import Icon from "@components/icon";

// fonts
const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

// proptypes
export type TimelineProps = {
  icon?: IconProps;
  titling?: {
    title?: string;
    subtitle?: string;
  };
  items?: Array<{
    icon?: IconProps;
    organisationName: string;
    as?: string;
    location?: string;
    period?: {
      from?: string;
      to?: string;
    };
    jobDescription?: Array<string>;
  }>;
};

// component
const Timeline = ({ icon, titling, items }: TimelineProps) => {
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
      <div className={["flex", "flex-col", "gap-4", "sm:gap-8"].join(" ")}>
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
        {items?.map(
          (
            { organisationName, as, location, period, jobDescription },
            index
          ) => (
            <div
              key={index}
              className={["flex", "flex-col", "gap-1"].join(" ")}
            >
              <h5
                className={[""].join(" ")}
              >{`${period?.from?.toUpperCase()} - ${period?.to?.toUpperCase()}`}</h5>
              <h4 className={["font-bold", "text-accent"].join(" ")}>
                {organisationName?.toUpperCase()}
              </h4>
              <h5
                className={["font-bold"].join(" ")}
              >{`${as?.toUpperCase()} - ${location?.toUpperCase()}`}</h5>
              <div
                key={index}
                className={["flex", "flex-col", "gap-1"].join(" ")}
              >
                <ul className={["list-disc", "ml-4"].join(" ")}>
                  {jobDescription?.map((job, index) => {
                    return (
                      <li key={index} className={[].join(" ")}>
                        {job}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Timeline;
