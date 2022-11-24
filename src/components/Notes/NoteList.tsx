import { ChangeEvent, useEffect, useState } from "react";
import { useSubjects } from "../../context/SubjectsProvider";
import Note from "../../entities/Note";

export default function NoteList({ selects }) {
  const { subjects, updateNote } = useSubjects();
  const subject = subjects.find(
    (currentSubject) => currentSubject.id === selects.subject
  );

  
  const [selectedNote, setSelectedNote] = useState<Note>();
  const [noteForm, setNoteForm] = useState<number>();
  
  useEffect(() => {
    setNoteForm(selectedNote?.note)
  }, [selectedNote])

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNoteForm(+value);
  };

  const cancelHandler = () => {
    setNoteForm(undefined);
    setSelectedNote(undefined)
  };

  const formSubmitHandler = (subjectId: string, noteId: string, note: number) => {
    updateNote(subjectId, noteId, note);
    cancelHandler()
  };

  const editHandler = (note: Note) => {
    setSelectedNote(note);
  };

  return (
    selects.subject && (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Calificación</th>
                </tr>
              </thead>
              <tbody>
                {subject.notes.map((currentNote) => {
                  const isThisOne = currentNote.id === selectedNote?.id;
                  return (
                    <tr>
                      <td>
                        {currentNote.student.name}{" "}
                        {currentNote.student.lastName}
                      </td>
                      <td>
                        {isThisOne ? (
                          <input
                            type="number"
                            className="form-control"
                            id="name"
                            placeholder={currentNote.note?.toString()}
                            value={noteForm}
                            onChange={formChangeHandler}
                          />
                        ) : (
                          <>{currentNote.note}</>
                        )}
                      </td>
                      <td>
                        {isThisOne ? (
                          <>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => formSubmitHandler(subject.id, currentNote.id, noteForm)}
                            >
                              <i className="fas fa-check"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => cancelHandler()}
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => editHandler(currentNote)}
                          >
                            <i className="fas fa-edit"></i>
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
