import ClassWithID from "./ClassWithID";
import Student from "./Student";

export default class Subject extends ClassWithID {
    public students: Student[] = []
    constructor(
        public name: string,
    ) {
        super()
    }
}