#!/usr/bin/node 
/*
https://github.com/parenparen/
*/

Function.prototype.curry = function () {
    var fn = this;

    if (this.length === 0) {
        return function () {
            fn ();
        };
    }

    var argStr = '';
    var curriedFn = '';
    var closingParens = '';
    for (var i = 0; i < this.length; i++) {
        curriedFn += 'function (a' + i + ') { return ';
        argStr += 'a' + i + (i === this.length - 1 ? '' : ', ');
        closingParens += ' }';
    }
    curriedFn += 'fn (' + argStr + ');' + closingParens;

    return eval ('false || ' + curriedFn);
};


function add (a, b) { return a + b; }

var curriedAdd = add.curry ();

var addOne = curriedAdd (1);

console.log (addOne (1)); // prints '2'

