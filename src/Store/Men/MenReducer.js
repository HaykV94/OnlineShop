import photo1 from "../../men_photo/Jackets/AsosDesign.jpeg";
import photo2 from "../../men_photo/Jackets/CalvinKlein.jpeg";
import photo3 from "../../men_photo/Jackets/Jack&Jones.jpeg";
import photo4 from "../../men_photo/Jackets/TheNorthFace.jpeg";
import photo5 from "../../men_photo/Jackets/TopMan.jpeg";
import photo6 from "../../men_photo/Jeans/ASOSDesign36.jpeg";
import photo7 from "../../men_photo/Jeans/Jack&Jones37.jpeg";
import photo8 from "../../men_photo/Jeans/Levi's116.jpeg";
import photo9 from "../../men_photo/Jeans/NewLook20.jpeg";
import photo10 from "../../men_photo/Jeans/Pull&Bear32.jpeg";
import photo11 from "../../men_photo/Polos/Abercrombie&Fitch29.jpeg";
import photo12 from "../../men_photo/Polos/ASOSDesign16.jpeg"
import photo13 from "../../men_photo/Polos/FredPerry65.jpeg"
import photo14 from "../../men_photo/Polos/NewLook20.jpeg"
import photo15 from "../../men_photo/Polos/TommyHilfiger75.jpeg"
import photo16 from "../../men_photo/Shoes/ASOSDesign.jpeg"
import photo17 from "../../men_photo/Shoes/BaseLondon74.jpeg"
import photo18 from "../../men_photo/Shoes/CallitSpring51.jpeg"
import photo19 from "../../men_photo/Shoes/RiverIsland42.jpeg"
import photo20 from "../../men_photo/Shoes/Schuh50.jpeg"
import photo21 from "../../men_photo/Trousers/ASOSDesign24.jpeg"
import photo22 from "../../men_photo/Trousers/Bershka45.jpeg"
import photo23 from "../../men_photo/Trousers/Jack&Jones32.jpeg"
import photo24 from "../../men_photo/Trousers/NewLook28.jpeg"
import photo25 from "../../men_photo/Trousers/Only&Sons40.jpeg"


const MenState = {
    JacketsM: [
        {
            brand: "AsosDesign",
            price: 30,
            img: photo1,
            id:1
        },
        {
            brand: "CalvinKlein",
            price: 280,
            img: photo2,
            id:2
        },
        {
            brand: "Jack&Jones",
            price: 60,
            img: photo3,
            id:3
        },
        {
            brand: "TheNorthFace",
            price: 215,
            img: photo4,
            id:4
        },
        {
            brand: "TopMan",
            price: 50,
            img: photo5,
            id:5
        }

    ],
    JeansM: [
        {
            brand: "ASOS Design",
            price: 36,
            img: photo6,
            id:6
        },
        {
            brand: "Jack&Jones",
            price: 37,
            img: photo7,
            id:7
        },
        {
            brand: "Levi's",
            price: 116,
            img: photo8,
            id:8
        },
        {
            brand: "New Look",
            price: 20,
            img: photo9,
            id:9
        },
        {
            brand: "Pull&Bear",
            price: 32,
            img: photo10,
            id:10
        }


    ],
    PoloM: [
        {
            brand: "Abercrombie & Fitch",
            price: 29,
            img: photo11,
            id:11
        },
        {
            brand: "ASOS Design",
            price: 16,
            img: photo12,
            id:12
        },
        {
            brand: "FredPerry",
            price: 65,
            img: photo13,
            id:13
        },
        {
            brand: "New Look",
            price: 20,
            img: photo14,
            id:14
        },
        {
            brand: "Tommy Hilfiger",
            price: 75,
            img: photo15,
            id:15
        }
    ],
    ShoesM: [
        {
            brand: "ASOS Design",
            price: 39,
            img: photo16,
            id:16
        },
        {
            brand: "Base London",
            price: 74,
            img: photo17,
            id:17
        },
        {
            brand: "Callit Spring",
            price: 51,
            img: photo18,
            id:18
        },
        {
            brand: "River Island",
            price: 42,
            img: photo19,
            id:19
        },
        {
            brand: "Schuh",
            price: 50,
            img: photo20,
            id:20
        }
    ],
    TrousersM: [
        {
            brand: "ASOS Design",
            price: 24,
            img: photo21,
            id:21
        },
        {
            brand: "Bershka",
            price: 45,
            img: photo22,
            id:22
        },
        {
            brand: "Jack&Jones",
            price: 32,
            img: photo23,
            id:23
        },
        {
            brand: "New Look",
            price: 28,
            img: photo24,
            id:24
        },
        {
            brand: "Only & Sons",
            price: 40,
            img: photo25,
            id:25
        }
    ],
    
}

const MenReducer = (state = MenState, action) => {
    if (action.type === 'sel') {
        return state.name === action.name ? { ...state, checked: !state.checked } : { ...state }
    } else {
        return state;
    }
}


export default MenReducer