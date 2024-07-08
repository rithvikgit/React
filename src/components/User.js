import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2, setState] = useState(1);

    useEffect(() => {
        // * API call
        // async function getUserInfo() {
        // }
    }, []);


    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>Name : {props.name}</h3>
            <h3>Location : Pune</h3>
            <h4>Contact : @rithvikgit</h4>
        </div>
    )
};

export default User;