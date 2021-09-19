import React, { useContext, useEffect } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Layout  from '../layouts/Layout';
import "./Notes.css";

function Notes() {
  const {
    fetchNotes,
    loading,
    loaded,
    error,
    notes
  } = useContext(NotesContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  console.log(notes);
  console.log('loading', loading);
  console.log('loaded', loaded);

  return (
    <Layout>
      <h1>Notes</h1>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

      {notes?.length ? (
        <ul className="notes-index">
          {notes.map(({_id, title, text}) => (
            <li key={_id}>{title}</li>
            ))} </ul>
        ) : <p>no notes</p>}
    </Layout>
  );

}

export default Notes;