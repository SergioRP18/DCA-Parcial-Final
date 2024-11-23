export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
  screen: string;
  products: [];
};

export enum ScreensActions {
  'NAVIGATE' = 'NAVIGATE',
  'GET_PRODUCTS' = 'GET_PRODUCTS',
  'ADD_PRODUCTS' = 'ADD_PRODUCTS'
};