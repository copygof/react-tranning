import localforage from "localforage";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import LoaderReducer from "./Reducers/loader.reducer";
import ModalReducer from "./Reducers/modal.reducer";

const persistConfig = {
  key: "root",
  storage: localforage,
  blacklist: ["loaderState"],
  whitelist: [],
};

let rootReducer = combineReducers({
  loaderState: LoaderReducer,
  modalState: ModalReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store: Store<any, any> = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  let persistor = persistStore(store);
  return { store, persistor };
};

export type RootStore = ReturnType<typeof rootReducer>;