import { RootStore } from "../index";

export const selectIsLoading = (state: RootStore) =>
  state.loaderState.loading;
