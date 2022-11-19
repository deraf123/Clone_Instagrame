import { Provider } from "react-redux";
import PageRoutes from "./components/PageRoutes";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <PageRoutes />

    </Provider>
  );
};
