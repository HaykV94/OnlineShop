import kidsReducer from "./Kids/KidsReducer";
import menReducer from "./Men/MenReducer";
import womenReducer from "./Women/WomenRreducer";
import menuReducer from "./Menu/MenuReducer";
import { createStore, combineReducers } from "redux";
import CartReducer from "./CartReducer";


const reducer = combineReducers({
    Men: menReducer,
    Women: womenReducer,
    Kids: kidsReducer,
    Menu: menuReducer,
    Cart: CartReducer
})

export const store = createStore(reducer);