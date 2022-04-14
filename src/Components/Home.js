import { useSelector } from "react-redux";
import Footer from "../Components/Footer/Footer"


function Home() {
    const men = useSelector(state => state.Men)
    const women = useSelector(state => state.Women)
    const kids = useSelector(state => state.Kids)

    const list = [men, women, kids];
     


    let arr = list.map(x => Object.values(x).map(v => Object.values(v).length > 3 ? Object.values(v) : null))
    console.log(arr);

    return (
        <div>
        <div className="ads"></div>
        <div className="prodDiv">
        {
        arr.map(x => x.map(v => v !== null ?
            <div class="showProduct">
                <div>
                    <img src={v[v.length - 1].img} alt="nkar" />
                    <h4>{v[v.length - 1].brand}</h4>
                    <p class="price">{v[v.length - 1].price + "$"}</p>
                </div>
            </div> : null))
        } 
        <Footer/>
        </div>
        </div>
    )
}


export default Home