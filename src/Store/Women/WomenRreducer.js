import photo1 from "../../women_photo/Dresses/AdamLippes433.jpg"
import photo2 from "../../women_photo/Dresses/AnnaKlein57.jpg"
import photo3 from "../../women_photo/Dresses/BadgleyMischka121.jpg"
import photo4 from "../../women_photo/Dresses/Bardot59.jpg"
import photo5 from "../../women_photo/Dresses/Chaser40.jpg"
import photo6 from "../../women_photo/Jeans/LAUREN74.jpg"
import photo7 from "../../women_photo/Jeans/NicoleMiller39.jpg"
import photo8 from "../../women_photo/Jeans/Signature24.jpg"
import photo9 from "../../women_photo/Jeans/Tommy39.jpg"
import photo10 from "../../women_photo/Jeans/U.S.PoloASSN.35.jpg"
import photo11 from "../../women_photo/Outerwear/BebeSport19.jpg"
import photo12 from "../../women_photo/Outerwear/CalvinKlein69.jpg"
import photo13 from "../../women_photo/Outerwear/LAUREN50.jpg"
import photo14 from "../../women_photo/Outerwear/TommyHilfiger83.jpg"
import photo15 from "../../women_photo/Outerwear/U.S.POLOASSN.22.jpg"
import photo16 from "../../women_photo/Shirts/Bebe24.jpg"
import photo17 from "../../women_photo/Shirts/Champion18.jpg"
import photo18 from "../../women_photo/Shirts/Columbia34.jpg"
import photo19 from "../../women_photo/Shirts/Levi's34.jpg"
import photo20 from "../../women_photo/Shirts/TommyHilfiger39.jpg"
import photo21 from "../../women_photo/Skirts/Fila44.jpg"
import photo22 from "../../women_photo/Skirts/MaxStudio31.jpg"
import photo23 from "../../women_photo/Skirts/Mod_o_doc20.jpg"
import photo24 from "../../women_photo/Skirts/PUMA23.jpg"
import photo25 from "../../women_photo/Skirts/Roxy27.jpg"


const WomenState = {
    DressesW: [
        {
            brand: "AdamLippes",
            price: 433,
            img: photo1
        },
        {
            brand: "AnnaKlein",
            price: 57,
            img: photo2
        },
        {
            brand: "BadgleyMischka",
            price: 121,
            img: photo3
        },
        {
            brand: "Bardot",
            price: 59,
            img: photo4
        },
        {
            brand: "Chaser",
            price: 40,
            img: photo5
        }
    ],
    JeansW: [
        {
            brand: "LAUREN",
            price: 74,
            img: photo6
        },
        {
            brand: "NicoleMiller",
            price: 39,
            img: photo7
        },
        {
            brand: "Signature",
            price: 24,
            img: photo8
        },
        {
            brand: "Tommy",
            price: 39,
            img: photo9
        },
        {
            brand: "U.S.PoloASSN.",
            price: 35,
            img: photo10
        }


    ],
    OuterwearW: [
        {
            brand: "BebeSport",
            price: 19,
            img: photo11
        },
        {
            brand: "CalvinKlein",
            price: 69,
            img: photo12
        },
        {
            brand: "LAUREN",
            price: 50,
            img: photo13
        },
        {
            brand: "TommyHilfiger",
            price: 83,
            img: photo14
        },
        {
            brand: "U.S.POLOASSN.",
            price: 22,
            img: photo15
        }
    ],
    ShirtsW: [
        {
            brand: "Bebe",
            price: 24,
            img: photo16
        },
        {
            brand: "Champion",
            price: 18,
            img: photo17
        },
        {
            brand: "Columbia",
            price: 34,
            img: photo18
        },
        {
            brand: "Levi's",
            price: 34,
            img: photo19
        },
        {
            brand: "TommyHilfiger",
            price: 39,
            img: photo20
        }
    ],
    SkirtsW: [
        {
            brand: "Fila",
            price: 44,
            img: photo21
        },
        {
            brand: "MaxStudio",
            price: 31,
            img: photo22
        },
        {
            brand: "Mod_o_doc",
            price: 20,
            img: photo23
        },
        {
            brand: "PUMA",
            price: 23,
            img: photo24
        },
        {
            brand: "Roxy",
            price: 27,
            img: photo25
        }
    ],
    
}

const womenReducer = (state = WomenState, action) => {
    if (action.type === 'sel') {
        return state.name === action.name ? { ...state, checked: !state.checked } : { ...state }
    } else { return state }

}


export default womenReducer