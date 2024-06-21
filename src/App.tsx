import React from "react";
import { Provider } from "react-redux";
import UsersPage from "./pages/UsersPage";
import { store } from "./store/store";

const App = () => {
  return (
    //redux for centralized statemanagement
    <Provider store={store}>
      <UsersPage />
    </Provider>
  );
};

export default App;
