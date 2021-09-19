import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Layout  from '../../layouts/Layout';
import "./AddNote.css"

import { NotesContext } from "../../contexts/NotesContext";

function AddNote() {

  return (
    <Layout>
        <p>testing</p>
    </Layout>
  );
}

export default AddNote;