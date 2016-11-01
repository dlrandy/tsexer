// import {differenceByd} from 'lodash';
// import {differenceBy} from 'lodash';
import { SocialNetwork, Person } from './social-network';
import * as _ from 'lodash';
export class App implements SocialNetwork{
    // title:String;
    title = 'erer'
    getUsers():Person[]{
        return [{name:'tom'}]
    }
}

console.log(_.isArray(new App().getUsers()));

