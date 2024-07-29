import { useDispatch } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch a action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">



                    <div className="mx-3 w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 h-100 p-2">
                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg rounded-lg m-auto" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                        <img className="rounded-lg" src={ITEM_URL + item?.card?.info?.imageId} ></img>


                    </div>
                </div>
            ))}

        </div>
    )
}

export default ItemList;