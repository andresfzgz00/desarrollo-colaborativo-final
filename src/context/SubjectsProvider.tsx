import {
    createContext,
    useState,
    PropsWithChildren,
    useContext,
  } from "react";
import Subject from "../entities/Subject";
  
  interface ISubjectsContext {
    subjects: Subject[];
    subject?: Subject;
    addSubject?: (name: string) => void;
    selectSubject?: (id: string) => void;
    deleteSubject?: (id: string) => void;
    updateSubject?: (toBeUpdatedSubject: Subject) => void;
    resetSubject?: () => void;
  }
  
  const SubjectsContext = createContext<ISubjectsContext>({
    subjects: [],
  });
  
  export const useSubjects = () => {
    return useContext(SubjectsContext);
  };
  
  export function SubjectsProvider({ children }: PropsWithChildren) {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [subject, setSubject] = useState<Subject>();
  
    const addSubject = (name: string) => {
      setSubjects(prevState => [...prevState, new Subject(name)])
    }
  
    const selectSubject = (id: string) => {
      const selectedSubject = subjects.find(currentSubject => currentSubject.id === id)
      if (selectedSubject) setSubject(selectedSubject)
    }
  
    const deleteSubject = (id: string) => {
      setSubjects(prevState => prevState.filter(currentSubject => {
          return currentSubject.id !== id
      }))
    }
  
    const updateSubject = (toBeUpdatedSubject: Subject) => {
      const index = subjects.findIndex(currentSubject => currentSubject.id === toBeUpdatedSubject.id)
      if (index > -1) setSubjects(prevState => {
          const auxState = [...prevState]
          auxState[index] = { ...prevState[index], ...toBeUpdatedSubject }
          return auxState
      })
      resetSubject()
    }
  
    const resetSubject = () => {
      setSubject(undefined)
    }
  
    const value = {
      subjects,
      subject,
      addSubject,
      selectSubject,
      deleteSubject,
      updateSubject,
      resetSubject
    };
  
    return (
      <SubjectsContext.Provider value={value}>
        {children}
      </SubjectsContext.Provider>
    );
  }
  