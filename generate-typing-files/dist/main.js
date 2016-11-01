"use strict";
var App = (function () {
    function App() {
    }
    return App;
}());
exports.App = App;
require('generate-typing-files/main');
//找的是dist下的main.d.ts
// import {App} from 'generate-typing-files'; 
//可以使用index.d.ts暴漏他们 ，有时候也可以设置package.json
"typings";
'./dist/index.d.ts';
compiler会找到这个目录下的所有d.ts文件;
可以通过index.d.ts暴漏所有的模块;
也可以通过package.json的typings设置;
先暂时这么理解吧;
