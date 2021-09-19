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
        // PULL FROM GRAPHQL SERVER
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

                // ADD FAKER DATA TO NOTES
                const faker = require("faker");
                const { v4:uuidv4 } = require('uuid');
                const fakerData = [];
                for (let i = 0; i < 10; i += 1) {
                    fakerData.push({
                    id: uuidv4(),
                    title: faker.lorem.words(4),
                    text: faker.lorem.paragraph(),
                    });
                }
                setNotes(currentNotes => [...currentNotes, ...fakerData]);
            });
        } catch (err) {
            setError(err.message || err.statusText);
        } finally {
        setLoaded(true);
        setLoading(false);
        }
    }

    // const addNote = async (formData) {
    //     try {
    //         await axios({
    //             url: 'https://api-eu-central-1.graphcms.com/v2/cktqzdof029d801yzbpid55uw/master',
    //             method: 'post',
    //             data: {
    //                     query: `mutation AddNote {
    //                         __typename
    //                         createNote(data: $data) {
    //                           id
    //                           title
    //                           text
    //                         }
    //                       }`
    //                 },
    //             }).then(res => console.log(res))
    //             .catch(err => console.log(err))
                    
    //     }
    // }

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