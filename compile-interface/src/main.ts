import { SocialNetwork, Person } from './social-network';
class App implements SocialNetwork{
    // title:String;
    title = 'erer'
    getUsers():Person[]{
        return [{name:'tom'}]
    }
}