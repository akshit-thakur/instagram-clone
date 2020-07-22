import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/mainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
