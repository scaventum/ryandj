import { Russo_One } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

import data from "@data";

const russoOne = Russo_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main>
      <section
        className={["p-4", "flex", "flex-col", "gap-y-4", "text-base"].join(
          " "
        )}
      >
        <section
          className={[
            "rounded",
            "p-4",
            "bg-yellow-500",
            "flex",
            "gap-x-4",
            "items-center",
          ].join(" ")}
        >
          <FontAwesomeIcon icon={faWarning} size="2xl" />
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
        <section>
          <pre
            className={[
              "rounded",
              "border-2",
              "border-current",
              "border-solid",
              "p-4",
              "whitespace-pre-wrap",
            ].join(" ")}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </section>
      </section>
    </main>
  );
}
