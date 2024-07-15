import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
let Logo = require('../utils/curry.png')

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //if no dependency array => useEffect is called the on every render
    //if dependency array is empfty = [] => useEffect is called on initial render(just once)
    //if dependency array is [btnNameReact] => called everytime btnReactName is updated
    useEffect(() => {
        // console.log("use Effect Called");
    }, [btnNameReact]);

    //selector is hook inside react-redux libary
    //subscribing to our store using selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return (
        <div className="flex justify-between bg-orange-100 shadow-sm">
            <div className="logo-container">
                <img className="w-20 m-5" src={Logo} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 py-1">
                        Online Staus: {onlineStatus ? '🟢' : "🔴"}
                    </li>
                    <li className="px-4 py-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 py-1">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4 py-1">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 py-1">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 py-1 "><Link to='/cart'>Cart- ({cartItems.length} items)</Link></li>
                    <li className="px-4 py-1 font-semibold">{loggedInUser}</li>
                    <li className="px-4">
                        <button className="px-4 py-1 rounded-lg bg-green-100"
                            onClick={() => {
                                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            }}
                        >{btnNameReact}</button>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Header;