import Link from "next/link";
import styles from "./NavigationBar.module.css";
function NavigationBar() {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/electronics">Electronics</Link>
      <Link href="/jewelry">Jewelry</Link>
      <Link href="/men">Men</Link>
      <Link href="/women">Women</Link>
      <Link href="/">Cart</Link>
    </div>
  );
}
export default NavigationBar;
