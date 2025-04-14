import { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ReduxProvider from "../../provider/ReduxProvider";
interface ILay {
  children: ReactNode;
}

const Layout: FC<ILay> = ({ children }) => {
  return (
    <ReduxProvider>
      <section className={scss.Layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </section>
    </ReduxProvider>
  );
};

export default Layout;
