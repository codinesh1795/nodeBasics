function gRN(){
    return Math.floor(Math.random()*100) +1;
}

function c2F (celsius){
    return (celsius*9)/5 + 32;
}
// common js method for export
module.exports = {
    gRN,
    c2F,
};

// es syntax for import/export - modify type in package json to "type":"module" from "commonjs"