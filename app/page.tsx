import data from "@data";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <pre className={styles.raw}>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
