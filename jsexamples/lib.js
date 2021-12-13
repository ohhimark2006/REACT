// HOF [ action is a function]
function forEach(elems, action) {
    for(elem of elems) {
        action(elem);
    }
}

// HOF 
function map(elems, transformFn) {
    var result = [];
    forEach(elems, function(elem) {
        result.push(transformFn(elem));
    });
    return result;
}

// HOF

function filter(elems, predicate) {
    var result = [];
    forEach(elems, function(elem) {
       if(predicate(elem)) {
           result.push(elem);
       }
    });
    return result;
}
