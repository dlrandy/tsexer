import { SocialNetwork, Person } from './social-network';
import * as _ from 'lodash';
class App implements SocialNetwork{
    // title:String;
    title = 'erer'
    getUsers():Person[]{
        return [{name:'tom'}]
    }
}

console.log(_.isArray(new App().getUsers()));
