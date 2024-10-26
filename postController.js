const posts = [
    {id:1, title: "post one"},
    {id:2, title: "post two"}
];
// add a hardoded post just for example to export
export const getPosts = () => posts; // method 1

// export { getPosts }; method 2
// export default getPosts, method 3

// one thing can be imported as default and others as non default