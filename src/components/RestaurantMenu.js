import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaturantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="m-5 ">
            <h1 className="font-extrabold    text-xl py-3">{name}</h1>
            <p className="py-3">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className="py-2 font-bold">Menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li className="py-2" key={items?.card?.info?.id}>
                        {items?.card?.info?.name} {" :- Rs"}
                        {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}
                    </li>
                ))}
            </ul>

        </div>
    )
};

export default RestaurantMenu;