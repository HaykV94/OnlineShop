

const CartState = [];




const CartReducer = (state = CartState, action) => {
    if (action.type === "AddToCart") {
            return [...state.filter(x=> x.id!==action.id), {
                brand: action.brand,
                price: action.price,
                img: action.img,
                id: action.id
            }]
        
    } else if (action.type === "RemoveFromCart") {
        return [...state.filter(x => x.id !== action.id)]
    } else {
        return state;
    }
}



export default CartReducer