import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    //Local State Variable - Super powerful variable
    const [listOfRestaurants, setListofRestaurant] = useState([]);
    const [filteredRestraunt, setFilteredRestaurant] = useState([]);    

    const [searchText, setSearchText] = useState("");

    //Whenever State Variable updates, reac triggers reconciliation cycle(re-renders the component).
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            //While loading this qapi to our application cors error will arrive. So use allow cros browers extention to to bypass the error.
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);

        //Optional chaning
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Conditional Rendring - 
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">

                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}>
                    </input>

                    <button onClick={() => {
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

                <button className="filter-btn"
                    onClick={() => {

                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListofRestaurant(filteredList);

                    }}
                >Top Rated Restaurant</button>

            </div>

            <div className="res-container">

                {/* // * looping through the <RestaurantCard /> components Using Array.map() method */}

                {filteredRestraunt.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}


            </div>

        </div>
    );
};

export default Body;