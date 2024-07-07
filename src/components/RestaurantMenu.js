import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId );

        const json = await data.json();

        setResInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li key={items?.card?.info?.id}>
                        {items?.card?.info?.name} {" :- Rs"}
                        {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}
                    </li>
                ))}
            </ul>

        </div>
    )
};

export default RestaurantMenu;