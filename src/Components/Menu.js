import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../Components/Cart/Cart"
import "./Comp.css";
import "./Cart/Cart.css";



function Menu(props) {
    const menu = useSelector(state => state.Menu)
    const men = useSelector(state => state.Men)
    const women = useSelector(state => state.Women)
    const kids = useSelector(state => state.Kids)
    const cartState = useSelector(state => state.Cart)
    const [cart, setCart] = useState(false)

    const list = {
        Men: men,
        Women: women,
        Kids: kids
    }
    console.log(props.count);
    let count = cartState.length;
    // const over=()=>{
    //     let drop= document.querySelector('.profDropdown');
    //     drop.style.display = 'block';
    // }

    // const out=()=>{
    //     let drop= document.querySelector('.profDropdown');
    //     drop.style.display = 'none';
    // }
    return (
        <>
            {cart ? <div><Cart cart={cart} setCart={setCart} /></div> : null}
            <div className="menu">
                <div className="menuHome">
                    <NavLink id="home" to="/">Home</NavLink>
                </div>
                <div className="menuNavBar">
                    {menu.map((v, i) =>
                        <NavLink className={v} to={v} key={i}>
                            {v}  <i id={v + "Angle"} className="fa fa-angle-right" aria-hidden="true"></i>
                            {Object.keys(list).map((val, i) => val === v ?
                                <ul key={i} className={v + i} >
                                    <div className="NavBarUl">
                                        {Object.keys(list[val]).map((vl, i) =>
                                            <li key={i} ><NavLink id="nav" to={v + '/' + vl}>{vl.slice(0, vl.length - 1)}</NavLink></li>)}
                                    </div>
                                </ul> : null)}
                        </NavLink>
                    )}
                </div>
                <div className="CartProf">
                    <div className="profDropdown">
                        <button to="/" className="profile"><i className="fa fa-user"></i></button>
                        <div className="profUL">
                            <li className="profLi"><button className="btn_profLi">Login</button></li>
                            <li className="profLi"><button className="btn_profLi">Sign up</button></li>
                            <li className="profLi"><button className="btn_profLi">Favourites</button></li>
                            <li className="profLi"><button className="btn_profLi">Sign out</button></li>
                        </div>
                    </div>
                    <button onClick={() => setCart(!cart)} id="cart" ><i className="fa fa-shopping-cart"><sup className="cartCount">{count}</sup></i></button>
                </div>
            </div>

        </>
    );
}

export default Menu