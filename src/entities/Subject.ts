import ClassWithID from "./ClassWithID";
import Note from "./Note";

export default class Subject extends ClassWithID {
    public notes: Note[] = []
    constructor(
        public name: string,
    ) {
        super()
    }
}