wbstorm里使用typescript的时候能提示，
是因为提供了该库的typings

import {differenceByd} from 'lodash';
import {differenceBy} from 'lodash';


declare module "reflect-metadata" {
    // The "reflect-metadata" module has no imports or exports, but can be used by modules to load the polyfill.
}
declare namespace Reflect {


import 'refelct-metadata'
Refelct.getMetadata()


rxjs 有很多的typings  file，e.g. .d.ts;

import 'rxjs' 就引入了一堆rxjs包含的typings  文件
rx.d.ts
export { Subject, AnonymousSubject } from './Subject';
export { Observable } from './Observable';
import './add/observable/bindCallback';
import './add/observable/bindNodeCallback';
import './add/observable/combineLatest';
import './add/observable/concat';
。。。。。。。。。。

import {Observable} from'rxjs/Observable';

import 'rxjs/add/operator/map'



reflect-meatadata 它里面使用了crypto，但是引入的crypto包发现根本没有.d.ts文件，crypto在这里只做引用
并不会影响reflect-metadata，所以它没有typings文件

对target是es5的，Promise这种变量并不存在，所以编译的时候要使用es6-shim，它会作为一个全局的typings供编译器使用
从而不报编译错

还有一种cdn的形式， 但是我们使用typings install lodash  --save 安装了它的typings文件

tsconfig 生成自己的typings文件

        