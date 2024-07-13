import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {

    // const [showItem,setShowItem] = useState(false);

    const handleClick = () => {
        // setShowItem(!showItem);
        setShowIndex();

    }

    return (
        <div>
            {/* header */}
            <div className="w-6/12 bg-gray-50 shadow-sm p-4 mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>⌄</span>
                </div>

                {/* Accordian */}
                {showItem && <ItemList items={data.itemCards} />}

                


            </div>
        </div>
    )
};


export default RestaurantCategory;