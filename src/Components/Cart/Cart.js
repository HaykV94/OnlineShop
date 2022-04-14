import { useSelector, useDispatch } from "react-redux";
import Menu from "../Menu"
import "./Cart.css";
import "../Comp.css"
import { useState } from "react";




function Cart(props) {
    // const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.Cart);
    const men = useSelector(state => state.Men);
    const women = useSelector(state => state.Women);
    const kids = useSelector(state => state.Kids);

    const removeCart = (e) => {
        dispatch({
            type: "RemoveFromCart",
            id: e.id
        })
    }
    let count = cart.length;
    let sum = cart.reduce((x,y)=> x + y.price,0);

    const list = [men, women, kids];

    return (
        <>
            <Menu count={count} />
            <div className="Cart">
                <button className="btnExit" id="CartExit_btn" onClick={() => props.setCart(!props.cart)}>x</button>
                <div className="CartTitle"><h4>Product Cart</h4></div>
                <div className="cartProdList">
                    {
                        cart.map(x =>
                            <div className="prodInCart">
                                <div className="CartImgDiv"><img className="CartImg" src={x.img} /></div>
                                <div className="CartProdContent">
                                    <div className="CartProdBrand"><h4>{x.brand}</h4></div>
                                    <div className="CartProdPrice"><h4>Price:{x.price + "$"}</h4></div>
                                    <div className="CartBtns">
                                        <div className="BtnDiv_RemoveFrCart">
                                            <button className="btn_RemoveFrCart" onClick={removeCart.bind(this, x)}>Remove from Cart</button></div>
                                        <div className="BtnDiv_Buy">
                                            <button className="btn_Buy">Buy</button></div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
                <div className="BuyAllDiv">
                    <button className="btn_buyAll">Buy All: {sum}$</button>
                </div>
            </div>
        </>
    )
}



export default Cart