import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    //Local State Variable - Super powerful variable
    const [listOfRestaurants, setListofRestaurant] = useState([]);
    const [filteredRestraunt, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const ResataurantCardPromoted = withPromtedLabel(RestaurantCard);

    //Whenever State Variable updates, reac triggers reconciliation cycle(re-renders the component).
    // console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            //While loading this qapi to our application cors error will arrive. So use allow cros browers extention to to bypass the error.
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // console.log(json);

        //Optional chaning
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection.
            </h1>
        )
    }

    const { loggedInUser, setUserName } = useContext(UserContext);

    //Conditional Rendring - 
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">

                    <input type="text" className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}>
                    </input>

                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            //Filter the restraunt cards and update the ui
                            //Search text
                            console.log(searchText);

                            const filteredRestraunt = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestraunt);

                        }}
                    >Search</button>

                </div>

                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-1 bg-gray-50 rounded-lg"
                        onClick={() => {

                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestaurant(filteredList);

                        }}
                    >Top Rated Restaurant</button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                    <label htmlFor="name" className="mr-2">User Name: </label>
                    <input
                        id="name"
                        className="px-4 py-1 bg-gray-50 rounded-lg"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>



            </div>

            <div className="flex flex-wrap">

                {/* // * looping through the <RestaurantCard /> components Using Array.map() method */}

                {filteredRestraunt.map((restaurant) => (
                    <Link
                        to={"/restaurants/" + restaurant.info.id}
                        key={restaurant.info.id}
                    >

                        {restaurant.info.promoted ? (
                            <ResataurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}

                    </Link>
                ))}


            </div>

        </div>
    );
};

export default Body;