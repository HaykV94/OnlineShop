import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Comp.css";
import Footer from "../Components/Footer/Footer";






function Men() {
    const men = useSelector(state => state.Men)
    
    const arr = Object.keys(men).map(x => x);
   
    
    const jacketImg = men.JacketsM.map(x => x.img);
    const jeansImg = men.JeansM.map(x => x.img);
    const poloImg = men.PoloM.map(x => x.img);
    const shoesImg = men.ShoesM.map(x => x.img);
    const trouserImg = men.TrousersM.map(x => x.img);

    const photos = [];
    // let randm = Math.round(Math.random()*4);
    
    photos.push(jacketImg[Math.floor(Math.random()*jacketImg.length)]);
    photos.push(jeansImg[Math.floor(Math.random()*jeansImg.length)]);
    photos.push(poloImg[Math.floor(Math.random()*poloImg.length)]);
    photos.push(shoesImg[Math.floor(Math.random()*shoesImg.length)]);
    photos.push(trouserImg[Math.floor(Math.random()*trouserImg.length)]);


    return (
        
        arr.map((v, i) =>
            <NavLink to={v} className="imgLink">
                    <div className="selectOpt">
                        <div >
                            <img src={photos[i]} />
                            <h3 className="imgTitle">{v.slice(0, v.length - 1)}</h3>
                        </div>
                    </div>
            </NavLink>
        )
        )
    }
    <Footer/>


export default Men