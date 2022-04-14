import photo1 from "../../women_photo/dresses.jpeg"
import photo2 from "../../women_photo/jeans.jpeg"
import photo3 from "../../women_photo/jumpers.jpeg"
import photo4 from "../../women_photo/shorts.jpeg"
import photo5 from "../../women_photo/skirts.jpeg"


const WomenState = {
    dresses: [
        {
            brand: "D&G",
            price: 50,
            img: photo1
        }

    ],
    jeans: [
        {
            brand: "D&G",
            price: 60,
            img: photo2
        }

    ],
    jumpers: [
        {
            brand: "D&G",
            price: 50,
            img: photo3
        }

    ],
    shorts: [
        {
            brand: "D&G",
            price: 50,
            img: photo4
        }

    ],
    skirts: [
        {
            brand: "D&G",
            price: 50,
            img: photo5
        }

    ]
}

const womenReducer = (state = WomenState, action) => {
    return state
}


export default womenReducer