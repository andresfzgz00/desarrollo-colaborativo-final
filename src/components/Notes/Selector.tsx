import { ChangeEvent } from "react";
import { useStudents } from "../../context/StudentsProvider";
import { useSubjects } from "../../context/SubjectsProvider";
import Student from "../../entities/Student";

export default function Selector({ selects, setSelects }) {
  const { subjects, addStudentToSubject } = useSubjects();
  const { students } = useStudents();

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelects((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    const { student, subject } = selects
    if (student && subject) {
        const obj: Student  = JSON.parse(student)
        addStudentToSubject(obj, subject)
    }
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-6">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={changeHandler}
            name="subject"
          >
            <option selected value="">
              Materia
            </option>
            {subjects.map(({ id, name }) => {
              return <option value={id}>{name}</option>;
            })}
          </select>
        </div>
        <div className="col-6">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={changeHandler}
            name="student"
          >
            <option selected value="">
              Alumno
            </option>
            {students.filter(student => {
                if (!selects.subject) return false
                const auxSubject = subjects.find(currentSubject => currentSubject.id === selects.subject)
                if (auxSubject) {
                    const index = auxSubject.notes.findIndex(currentNote => currentNote.student.id === student.id)
                    if (index > -1) return false
                    else return true
                }
                return false
            }).map((student) => {
                const { name, lastName } = student
                return (
                    <option value={JSON.stringify(student)}>{name} {lastName}</option>
                )
            })}
          </select>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={submitHandler}>
        Agregar
      </button>
    </>
  );
}
