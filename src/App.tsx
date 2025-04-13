import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { link } from "./constants/Link";

const App: FC = () => {
  return (
    <Routes>
      {link.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
    </Routes>
  );
};

export default App;
