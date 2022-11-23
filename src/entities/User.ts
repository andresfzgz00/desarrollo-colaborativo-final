import ClassWithID from "./ClassWithID";

export default class User extends ClassWithID {
    constructor(
        public email: string,
        public password: string
    ) {
        super()
    }
}