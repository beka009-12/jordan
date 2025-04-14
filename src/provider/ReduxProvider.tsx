import { FC, ReactNode } from "react";
import { store } from "../store/Store";
import { Provider } from "react-redux";

interface IProvider {
  children: ReactNode;
}
const ReduxProvider: FC<IProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
