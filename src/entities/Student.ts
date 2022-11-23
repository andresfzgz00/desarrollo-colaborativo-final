import ClassWithID from "./ClassWithID";

export default class Student extends ClassWithID {
    constructor(
        public name: string,
        public lastName: string
    ) {
        super()
    }
}