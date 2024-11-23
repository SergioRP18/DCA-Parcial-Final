import { ScreensActions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case ScreensActions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			}
		
		case ScreensActions.ADD_PRODUCTS:
			return {
				...currentState,
				products: [...currentState.products, currentAction.payload]
			}


		case ScreensActions.GET_PRODUCTS:
			return {
				...currentState,
				product: payload,
			}
		
		default:
			return currentState;
	}
};