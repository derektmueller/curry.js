#!/usr/bin/node 
/*
https://github.com/parenparen/

Copyright 2014 Derek Mueller
Released under the MIT license
http://opensource.org/licenses/MIT
*/

Function.prototype.curry = function (i) {
    var i = typeof i === 'undefined' ? 0 : i;
    var fn = this;

    if (this.length === 0) {
        return function () {
            fn ();
        };
    }

    var obj = {}; 
    if (i < this.length - 1) {
        eval ('obj["fn"] = function (a' + i + ') {' +
            'return ' + fn.curry (i + 1).toString () + ';' + 
        '}');
    } else {
        var argStr = '';
        for (var j = 0; j < fn.length; j++) {
            argStr += 'a' + j;
            if (j < fn.length - 1) {
                argStr += ', ';
            }
        }
        eval ('obj["fn"] = function (a' + i + ') {' +
            'return fn (' + argStr + ');' +
        '}')
    }
    return obj['fn'];
};

function add (a, b) { return a + b; }

var curriedAdd = add.curry ();

var addOne = curriedAdd (1);

console.log (addOne (1)); // prints '2'

