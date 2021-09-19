import React, { useState, createContext } from "react";
import axios from "axios";

export const NotesContext = createContext({
    fetchNotes: () => [],
    loaded: false,
    loading: false,
    error: null,
    notes: [],
  });

export const NotesProvider = (props) => {
    const [notes, setNotes] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);


    const fetchNotes = async () => {   
        setLoading(true);         
        try {
        await axios({
            url: 'https://api-eu-central-1.graphcms.com/v2/cktqzdof029d801yzbpid55uw/master',
            method: 'post',
            data: {
                    query: `query Notes {
                        notes {
                            id
                            title
                            text
                        }
                    }`
                }
            }).then((result) => {
                setNotes(result.data.data.notes);
                if (result.status !== 200) {
                    throw result;
                }
            });
        } catch (err) {
            setError(err.message || err.statusText);
        } finally {
        setLoaded(true);
        setLoading(false);
        }
    }

    return (
        <NotesContext.Provider
          value={{
            notes,
            loading,
            loaded,
            error,
            fetchNotes
          }}
        >
          {props.children}
        </NotesContext.Provider>
    );
};