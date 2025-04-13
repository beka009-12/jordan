import { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
interface ILay {
  children: ReactNode;
}

const Layout: FC<ILay> = ({ children }) => {
  return (
    <section className={scss.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
