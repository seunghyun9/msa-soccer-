import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='admin/dashboard'>DashBoard</Link> </li>

        <li className={styles.li}> <Link href='common/components/basic-link'>Basic</Link> </li>

        
        <li className={styles.li}> <Link href='user/index'>User</Link> </li>


        <li className={styles.li}> <Link href='board/board-list'>Board List</Link> </li>

        <li className={styles.li}> <Link href='game/game-list'>GameList</Link> </li>
        <li className={styles.li}> <Link href='game/team-list'>TeamList</Link> </li>
        <li className={styles.li}> <Link href='todo/todo-list'>ToDoList</Link> </li>
        <li className={styles.li}> <Link href='user/sign-in'>SignIn</Link> </li>
        <li className={styles.li}> <Link href='user/sign-up'>SignUp</Link> </li>
        
        
      </ul>
    </nav>

    
  );
};
