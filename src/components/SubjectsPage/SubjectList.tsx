import { ChangeEvent, useState } from "react";
import { useSubjects } from "../../context/SubjectsProvider";
import Subject from "../../entities/Subject";

export default function SubjectList() {
  const [form, setForm] = useState({ name: "" });
  const {
    subjects,
    deleteSubject,
    selectSubject,
    subject: currentSubject,
    updateSubject,
    resetSubject,
  } = useSubjects();

  const formSubmitHandler = () => {
    const { name } = form;
    if (name && currentSubject) {
      const auxSubject = { ...currentSubject, name };
      updateSubject(auxSubject);
    }
  };

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const cancelHandler = () => {
    setForm({ name: "" });
    resetSubject();
  };

  const editHandler = ({ id, name }: Subject) => {
    setForm({ name });
    selectSubject(id);
  };

  return (
    subjects.length > 0 && (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => {
                  const { id, name } = subject;
                  const isThisOne = id === currentSubject?.id;
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
                            onClick={() => editHandler(subject)}
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
                            onClick={() => deleteSubject(id)}
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
