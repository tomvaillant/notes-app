import React from 'react';
import {
 NavLink
} from "react-router-dom";
import '../NotesList/NotesList';
import '../NotesList/Notes.css'

function Header() {
    return (
        <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/notes/add">New Note</NavLink>
        </nav>
        </header>
    )
}

export default Header;