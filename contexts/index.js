import { createContext } from "react";
import RootStore from "../stores/index";

console.log("init context");

const store = new RootStore();

export const storeContext = createContext(store);