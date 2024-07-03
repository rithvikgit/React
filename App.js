import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{id:"heading"},"HelloWorld From React App.js file!");

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// Nested html in react

/**
 * <div id="parent">
 *      <div id = "child1">
 *          <h1>im h1 tag<h1>
 *          <h2><h2>
 *      </div>
 *      <div id = "child2">
 *          <h1>im h1 tag<h1>
 *          <h2><h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1",{},"I'm a h1 tag"),
                React.createElement("h2",{},"I'm a h2 tag"),
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{},"I'm a h1 tag"),
                React.createElement("h2",{},"I'm a h2 tag"),
            ]
        )
    ]
);

// the above clutered code is core react
//jsx is nkw the mordern way in which we can covercoe this culterness

console.log(parent);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(parent);