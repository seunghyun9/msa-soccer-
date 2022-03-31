import style from "common/style/Layout.module.css";
import Nav from "common/Nav";
import Footer from "common/Footer"
export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
      <Footer/>
    </>
  );
};