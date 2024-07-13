import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaturantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log('1',resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log('2',categories);



    return (
        <div className="m-5  text-center">
            <h1 className="font-extrabold    text-2xl py-3">{name}</h1>
            <p className="py-3 font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* catagories accordian */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}







            {/* <h2 className="py-2 font-bold">Menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li className="py-2" key={items?.card?.info?.id}>
                        {items?.card?.info?.name} {" :- Rs"}
                        {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}
                    </li>
                ))}
            </ul> */}

        </div>
    )
};

export default RestaurantMenu;