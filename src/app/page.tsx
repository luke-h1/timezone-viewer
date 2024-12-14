import styles from "./page.module.scss";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>&#8962;</p>
        <Link href="/overview" className="glow">
          Overview
        </Link>
      </main>
    </div>
  );
}
