import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "@data";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

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
            <h3 className="font-bold">Sorry for the inconvenience!</h3>
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
