 # React
/**
 * Props :

 * prop -> is Just a JS Object

 * Note: When you have to dainamically pass in a data to a component, you pass in prop


 * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

 * const { resName, cuisine } = props;
*/

{/* // 
* looping through the <RestaurantCard /> components Using Array.map() method 

* not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

* We can also use index as the key to the JSX child element - which is the 2nd parameter of the map() method, but is not a recommended practice -   react official Docs declared this

* Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
                
*/}

 * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

 * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

 * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

# Parcel
- DEV Build
- Local Server
- HMR = Hot Module Replacement  
- File Watching Algorithm - written in cpp
- Caching - Faster Builds
- Image Opimization
- Minification
- Bundling
- Compressing 
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking- remove unsed code

# Food Odering App
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *  - Restaurant Card
 *      -img
 *      -name of res, star rating, cusines, etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 # Two Types of import export
- Default import export
    export default Component;
    import default Component;

- Named Export/Import
    export const Component;
    export {Component} from "path";

...
# React Hooks
- (Normal JS Utility Functions)
- useState() - Superpowerful State variable in React
- useEffect()

# 2 types of Routing in web apps
- Client Side Route
- Server Side Routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect Our store to the app
- Create a Cart Slice
- dispatch(action)
- Selector

# Types of Testing (Developers)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app
- Insatll React Testing Library
- Installed Jest
- Install Babel dependencies
- Configure Babel
- Configuire Parcel Config file to disable default babel transpliation
- Jest configuration:- npx jest --init
- Install jsdom lib
- Install @babel/preset-react -to mke JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install :- npm i -D @testing-library/jest-dom