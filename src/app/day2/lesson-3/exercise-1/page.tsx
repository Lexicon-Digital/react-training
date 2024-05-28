'use client'

import {useEffect} from "react";
import styles from "./page.module.css";

const Page = () => {
    return <>
        <h1> Note-worthy 📝 </h1>
        <LatestNotes/>
    </>
}

type PostIts = {
    postIts: Note[]
}

type Note = {
    note: string
    author: string
    created: string
}


const LatestNotes = () => {


    useEffect(() => {
        // Fetch the notes here await fetch(api_url, method/request type, [other_params]);
        const fetchNotes = async () => {
        }
        fetchNotes()
    }, [])


    return <>
        <h4>Latest Notes</h4>
        <span className={styles.noteContainer}>
            {/*  Map the list of notes here in to NoteItems, but you only want to show a maxiumum of 6*/}
            {/*  Extra credit if you can order them too, but if not, don't worry  */}
        </span>

    </>
}

type NoteProps = {
    note: Note
}

const NoteItem = ({note} : NoteProps) => {
    return <span className={styles.noteItem}>
                <p className={styles.content}>{note.note}</p>
                <p className={styles.author}>- {note.author}</p>
                <p className={styles.date}>{new Date(note.created).toLocaleString('default', { month: 'long', day: "2-digit" })}</p>
            </span>
}


export default Page