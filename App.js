import React from "react";
import ReactDOM from "react-dom/client";

// React Element

//React.createElement => Object => HTMLElement(render)
/**
 * const heading = React.createElement("h1", { id: "heading" }, "Namste React");
 * console.log(heading);
 */


//JSX :- it is not HTML in JS, It is HTML like syntax or XML like.
//JSx :- (transpiled before it reached to JS)- Parcel - Babel.
//JSX => React.CreateElement => ReactElement-JS Object => JTMLElement(render)
const jsxHeading = <h1 id = "heading" className="head" tabIndex="5">Namste REact using JSX</h1>;

console.log(jsxHeading);



//React Component
//Class Based Component - OLD
//Functional Component - NEW

//React Functional Component
const Title = () => {
    return <h1 id="heading">Namste React Functional Component title</h1>;
};

//Component Composition0
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
        <h1 id="heading">Namste React Functional Component</h1>
    </div> 
);

const HeadingComponent2 = () => <h1 id="heading">Namste React Functional Component</h1>;

console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);