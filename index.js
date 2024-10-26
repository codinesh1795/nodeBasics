// es syntax for importing
import { getPosts } from "./postController.js";

// to get rid of curly braces export as default
//import getPosts from "./postController.js"

// for default and non default exports, import can be like following
// import deafultFunction, { getNonDefaultFunctions } from "./file.js"

console.log(getPosts())

// commonjs import method
//const { gRN, c2F } = require('./utils');

//console.log(`Randon Number: ${gRN()}`);

//console.log(`Celsius to Faranheight: ${c2F(0)}`);