import { v4 as uuidv4 } from 'uuid';

export default class User {
    id: string;
    constructor(
        public email: string,
        public password: string
    ) {
        this.id = uuidv4();
    }
}