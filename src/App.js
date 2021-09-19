import React from "react";
import { NotesProvider } from "./contexts/NotesContext";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote/AddNote";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <NotesProvider>
        <Switch>
          <Route exact path="/" component={Notes}></Route>
          <Route exact path="/notes/add" component={AddNote}></Route>
        </Switch>
      </NotesProvider>
    </Router>
  );
}

export default App;
