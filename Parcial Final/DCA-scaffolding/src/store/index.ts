import { AppState, Observer } from "../types/store";
import { reducer } from "./reducer";

const initialState: AppState = {
	screen: 'USER',
	products: [],
};

export let appState = initialState;

let observers: Observer[] = [];

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

	observers.forEach((o: any) => o.render());
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};