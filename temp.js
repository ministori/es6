/**
 * Created by joon-seokmoon on 2017. 9. 3..
 */

'use strict';
debugger;

let name = 'tennis';
let s = {

    [name] : 1,
    [name + 'Game'] : 'weem',
    [name + 'fn'](){
        return 123;
    }

};

console.log(s.tennis);
console.log(s.tennisGame);
console.log(s.tennisfn());

name = 'www';

console.log(s.www);
console.log(s.wwwGame);
console.log(s.wwwfn());
