import { ChangeEvent, useState } from "react";
import { useStudents } from "../../context/StudentsProvider";
import Student from "../../entities/Student";

export default function StudentList() {
  const [form, setForm] = useState({ name: "", lastName: "" });
  const {
    students,
    deleteStudent,
    selectStudent,
    student: currentStudent,
    updateStudent,
    resetStudent
  } = useStudents();

  const formSubmitHandler = () => {
    const { name, lastName } = form;
    if (name && lastName && currentStudent) {
      const auxStudent = { ...currentStudent, name, lastName };
      updateStudent(auxStudent);
    }
  };

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setForm(prevState => ({
        ...prevState,
        [id]: value
    }))
  };

  const cancelHandler = () => {
    setForm({ name: "", lastName: "" });
    resetStudent()
  };

  const editHandler = ({ id, name, lastName }: Student) => {
    setForm({ name, lastName });
    selectStudent(id);
  };

  return (
    students.length > 0 && (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  const { id, lastName, name } = student;
                  const isThisOne = id === currentStudent?.id;
                  return (
                    <tr>
                      <th scope="row">{id}</th>
                      <td>
                        {isThisOne ? (
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder={name}
                            value={form.name}
                            onChange={formChangeHandler}
                          />
                        ) : (
                          <>{name}</>
                        )}
                      </td>
                      <td>
                        {isThisOne ? (
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={form.lastName}
                            placeholder={lastName}
                            onChange={formChangeHandler}
                          />
                        ) : (
                          <>{lastName}</>
                        )}
                      </td>
                      <td>
                        {isThisOne ? (
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={formSubmitHandler}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => editHandler(student)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        )}
                        {isThisOne ? (
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => cancelHandler()}
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteStudent(id)}
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
}
