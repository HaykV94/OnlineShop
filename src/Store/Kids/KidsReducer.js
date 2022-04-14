import photo1 from "../../kids_photo/BoyOuterwear/BurtonKids181.jpg"
import photo2 from "../../kids_photo/BoyOuterwear/ConverseKids50.jpg"
import photo3 from "../../kids_photo/BoyOuterwear/HellyHansenKids95.jpg"
import photo4 from "../../kids_photo/BoyOuterwear/SaveTheDuckKids117.jpg"
import photo5 from "../../kids_photo/BoyOuterwear/U.S.POLO_ASSN.33.jpg"
import photo6 from "../../kids_photo/BoyShirts/adidasKids12.jpg"
import photo7 from "../../kids_photo/BoyShirts/ConverseKids24.jpg"
import photo8 from "../../kids_photo/BoyShirts/TheOriginalRetroBrandKids12.jpg"
import photo9 from "../../kids_photo/BoyShirts/TinyWhales24.jpg"
import photo10 from "../../kids_photo/BoyShirts/VansKids33.jpg"
import photo11 from "../../kids_photo/BoyShoes/Carter's19.jpg"
import photo12 from "../../kids_photo/BoyShoes/MerrellKids46.jpg"
import photo13 from "../../kids_photo/BoyShoes/ReebokKids47.jpg"
import photo14 from "../../kids_photo/BoyShoes/SKECHERS_KIDS29.jpg"
import photo15 from "../../kids_photo/BoyShoes/StrideRite360_30.jpg"
import photo16 from "../../kids_photo/GirlDress/ConverseKids36.jpg"
import photo17 from "../../kids_photo/GirlDress/HUXBABY45.jpg"
import photo18 from "../../kids_photo/GirlDress/PEEK23.jpg"
import photo19 from "../../kids_photo/GirlDress/RoxyKids23.jpg"
import photo20 from "../../kids_photo/GirlDress/VineyardVinesKids37.jpg"
import photo21 from "../../kids_photo/GirlShoes/Carter's19.jpg"
import photo22 from "../../kids_photo/GirlShoes/Jellypop20.jpg"
import photo23 from "../../kids_photo/GirlShoes/ReebokKids28.jpg"
import photo24 from "../../kids_photo/GirlShoes/SKECHERS_KIDS31.jpg"
import photo25 from "../../kids_photo/GirlShoes/StrideRite360_30.jpg"


const KidsState = {
    OuterwearB: [
        {
            brand: "BurtonKids",
            price: 181,
            img: photo1
        },
        {
            brand: "ConverseKids",
            price: 50,
            img: photo2
        },
        {
            brand: "HellyHansenKids",
            price: 95,
            img: photo3
        },
        {
            brand: "SaveTheDuckKids",
            price: 117,
            img: photo4
        },
        {
            brand: "U.S.POLO_ASSN.",
            price: 33,
            img: photo5
        }

    ],
    ShirtsB: [
        {
            brand: "adidasKids",
            price: 12,
            img: photo6
        },
        {
            brand: "ConverseKids",
            price: 24,
            img: photo7
        },
        {
            brand: "TheOriginalRetroBrandKids",
            price: 12,
            img: photo8
        },
        {
            brand: "TinyWhales",
            price: 24,
            img: photo9
        },
        {
            brand: "VansKids",
            price: 33,
            img: photo10
        }


    ],
    ShoesB: [
        {
            brand: "Carter's",
            price: 19,
            img: photo11
        },
        {
            brand: "MerrellKids",
            price: 46,
            img: photo12
        },
        {
            brand: "ReebokKids",
            price: 47,
            img: photo13
        },
        {
            brand: "SKECHERS_KIDS",
            price: 29,
            img: photo14
        },
        {
            brand: "StrideRite360",
            price: 30,
            img: photo15
        }
    ],
    DressG: [
        {
            brand: "ConverseKids",
            price: 36,
            img: photo16
        },
        {
            brand: "HUXBABY",
            price: 45,
            img: photo17
        },
        {
            brand: "PEEK",
            price: 23,
            img: photo18
        },
        {
            brand: "RoxyKids",
            price: 23,
            img: photo19
        },
        {
            brand: "VineyardVinesKids",
            price: 37,
            img: photo20
        }
    ],
    ShoesG: [
        {
            brand: "Carter's",
            price: 19,
            img: photo21
        },
        {
            brand: "Jellypop",
            price: 20,
            img: photo22
        },
        {
            brand: "ReebokKids",
            price: 28,
            img: photo23
        },
        {
            brand: "SKECHERS_KIDS",
            price: 31,
            img: photo24
        },
        {
            brand: "StrideRite360",
            price: 30,
            img: photo25
        }
    ],
}

const kidsReducer = (state = KidsState, action) => {
    if (action.type === 'sel') {
        return state.name === action.name ? { ...state, checked: !state.checked } : { ...state }
    } else { return state }
}


export default kidsReducer