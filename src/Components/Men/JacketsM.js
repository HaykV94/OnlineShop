import { useState } from "react";
import { useSelector } from "react-redux";
import "../Comp.css";
import QuickView from "../QuickView";
import Cart from "../Cart/Cart";
import Footer from "../../Components/Footer/Footer";



function JacketsM() {
    const men = useSelector(state => state.Men);
    const [obj, setObj] = useState();
    const [active, setActive] = useState(false)

    const quickV = (e) => {
        setObj(e);
        setActive(true)

    }
    return (
        <>
         {active ? <div><QuickView obj={obj} active={active} setActive={setActive} /></div> : null}
            <div className="mainDivOfProducts" onClick={() => active ? setActive(!active) : null}>
                <div className="ads"></div>
                
                <div className="prodDiv" style={{ opacity: active ? "0.7" : null }} >
                    {
                        men.JacketsM.map(v =>
                            <div className="showProduct">
                                <div className="product">
                                    <button onClick={quickV.bind(this, v)} className="QuickView">Quick View</button>
                                    <img src={v.img} alt="nkar" />
                                    <h4 className="brandName">{v.brand}</h4>
                                    <p className="price">${v.price}</p>
                                </div>
                            </div>)
                    }
                   <Footer/>
                </div>
                
                
            </div>
                </>
        
    )
}


export default JacketsM