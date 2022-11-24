import ClassWithID from "./ClassWithID";
import Student from "./Student";

export default class Note extends ClassWithID {
    note?: number
    constructor(
        public student: Student,
    ) {
        super()
    }
}