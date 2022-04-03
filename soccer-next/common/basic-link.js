import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function basiclink(){
  return (
    <nav>
      <ul>
        <li className={styles.li}> <Link href='common/components/basic-link'>Basic</Link> </li>
        <li > <Link href='todo/components/todo'>ToDo</Link> </li>
        <li > <Link href='user/index'>User</Link> </li>
      </ul>
    </nav>
  );
};