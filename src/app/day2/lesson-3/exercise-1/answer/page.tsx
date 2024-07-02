'use client'

import { useEffect, useState } from "react";
import styles from "../../page.module.css";

const Page = () => {
    return <>
        <h1> Note-worthy 📝 </h1>
        <LatestNotes />
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
    const [notes, setNotes] = useState<PostIts>({ postIts: [] })

    useEffect(() => {
        const fetchNotes = async () => {
            const notesResponse = await fetch("https://intro-lemon.vercel.app/api/posts")
            const json = await notesResponse.json() as PostIts
            console.log("Successfully fetched notes....")
            setNotes(json)
        }
        fetchNotes()
    }, []) // Empty dependencies array because we only want to call this on initial render


    return <>
        <h4>Latest Notes</h4>
        <span className={styles.noteContainer}>
            {
                notes.postIts
                    .sort((note, othernote) => new Date(note.created).getTime() - new Date(othernote.created).getTime())
                    .slice(0, 6)
                    .map((note) => {
                        return <NoteItem key={note.created} note={note}></NoteItem>
                    })
            }
        </span>

    </>
}

type NoteProps = {
    note: Note
}

const NoteItem = ({ note }: NoteProps) => {
    return <span className={styles.noteItem}>
        <p className={styles.content}>{note.note}</p>
        <p className={styles.author}>- {note.author}</p>
        <p className={styles.date}>{new Date(note.created).toLocaleString('default', { month: 'long', day: "2-digit" })}</p>
    </span>
}










export default Page
