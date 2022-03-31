import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function basic(){
  return (
    <nav className={basic}>
      <ul>
        <li><Link href='/basic/calc'>Calculator</Link> </li>
        <li><Link href='/basic/counter'>Counter</Link> </li>
        <li><Link href='/basic/bmi'>BMI</Link> </li>
      </ul>
    </nav>
  );
};  