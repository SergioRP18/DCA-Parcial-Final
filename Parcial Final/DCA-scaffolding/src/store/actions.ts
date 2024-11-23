import { Screens } from "../types/navigation";
import { ScreensActions } from "../types/store";

export const navigate = (screen:Screens) => {
    return {
        action: ScreensActions.NAVIGATE,
        payload: screen,
    };
};