import { useContext } from "react";
import { storeContext } from "../contexts/index.js";

console.log("init context");


export const useStore = () => useContext(storeContext);