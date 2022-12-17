

function receivesAFunction(callback) {
    callback();
} 
function returnsANamedFunction() {
    let fn = returnsANamedFunction;
    return fn;
    
}

let returnAnAnonymousFunction = () => {}
returnAnAnonymousFunction;