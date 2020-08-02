import {LoremIpsum} from 'lorem-ipsum';
import {uuid} from 'uuidv4';

const lorem = new LoremIpsum();

export default function createTask(){
    return{
        id: uuid(),
        // name: lorem.generateSentences(5),
        // completed: false,
    }
}

