import { StylesProvider, ThemeProvider } from "@material-ui/core";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./Components/App";
import { Theming } from "./Styles/theming";
import AlertContainer from "./Containers/AlertContainer";
import LoadingContainer from "./Containers/LoadingContainer";
import "./i18n";
import "./index.css";
import Redux from "./Libs/Redux/";
import "./Styles/main.css";
import reportWebVitals from "./reportWebVitals";

const { store, persistor } = Redux();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={Theming}>
          <Suspense
            fallback={
              <span className="center text-base">
                Loading...
              </span>
            }
          >
            <App />
          </Suspense>
          <LoadingContainer />
          <AlertContainer />
        </ThemeProvider>
      </StylesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
