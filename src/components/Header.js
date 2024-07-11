import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
let Logo = require('../utils/curry.png')

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //if no dependency array => useEffect is called the on every render
    //if dependency array is empfty = [] => useEffect is called on initial render(just once)
    //if dependency array is [btnNameReact] => called everytime btnReactName is updated
    useEffect(() => {
        console.log("use Effect Called");
    }, [btnNameReact]);

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
                    <li className="px-4 py-1">Cart</li>
                    <l1 className="px-4">
                        <button className="px-4 py-1 rounded-lg bg-green-100"
                            onClick={() => {
                                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            }}
                        >{btnNameReact}</button>
                    </l1>

                </ul>

            </div>
        </div>
    )
}

export default Header;