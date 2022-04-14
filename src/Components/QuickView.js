import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Cart from "./Cart/Cart"


function QuickView(props) {

    const dispatch = useDispatch()
    const men = useSelector(state => state.Men)
    const women = useSelector(state => state.Women)
    const kids = useSelector(state => state.Kids);
    const cart = useSelector(state => state.Cart);


    const list = [men, women, kids];

    const AddToCart = (e) => {
        dispatch({
            type: "AddToCart",
            brand: e.brand,
            price: e.price,
            img: e.img,
            id: e.id
        })

    }
    return (
        <>
            <div className="quickV_Window">
                {Object.values(men).map(v =>
                    v.map(val => props.obj && props.obj.id === val.id ?
                        <div style={{ display: "flex" }}>
                            <div className="ImgBrand">
                                <h3 className="brandName">{val.brand}</h3>
                                <img src={val.img} />
                            </div>
                            <div className="QVWindContent">
                                <button className="btnExit" onClick={() => props.setActive(!props.active)}>x</button>
                                <div className="prodDescript">
                                    <h2>{val.brand}</h2>
                                </div>
                                <div className="btnOnQV">
                                    <button className="btnFav" onClick={()=>{document.querySelector('.fa-heart-o').className="fa fa-heart"}}>
                                        <h4>Add to Favourites</h4>
                                        <i className="fa fa-heart-o"></i>
                                    </button>
                                    <button className="btnAdd" onClick={AddToCart.bind(this, val)}>
                                        <div className="btnAddContent">
                                            <h4>Add to Cart</h4>
                                            <h3 >{val.price + "$"}</h3>
                                        </div>
                                        <i id="cartIcon" className="fa fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>



                        </div> : null))}
            </div>
        </>
    )
}


export default QuickView