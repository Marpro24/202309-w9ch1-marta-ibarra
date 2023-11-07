import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import mainTheme from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
