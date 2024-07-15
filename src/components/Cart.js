import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());

    }


    return (
        <div className="text-center mx-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>



            <div className="w-6/12 m-auto ">
                <div>
                    <button className="px-4 py-1 rounded-lg bg-red-100 m-5 right-0" onClick={handleClearCart}>Clear Cart</button>

                </div>
                {cartItems.length === 0 && (<h1 className="mx-10 font-bold text-xl">Your cart is empty</h1>)}
                {cartItems.length === 0 && (<h2>You can go to home page to view more restaurants</h2>)}

                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;