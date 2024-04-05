import { RootState } from "../../store";

export const selectorSearch = (state: RootState) => state.searchSlice.value;