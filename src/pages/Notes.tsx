import { useState } from "react";
import NoteList from "../components/Notes/NoteList";
import Selector from "../components/Notes/Selector";

export default function Notes() {
  const [selects, setSelects] = useState({ subject: "", student: "" });
  return (
    <>
        <Selector selects={selects} setSelects={setSelects} />
        <NoteList selects={selects} />
    </>
  )
}
