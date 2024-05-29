'use client'
import {useState} from "react";
import styles from "../../../page.module.css";
import {PostIts} from "@/app/day2/lesson-3/exercise-4/answer/types/Types";
import {Spinner} from "@/app/day2/lesson-3/exercise-4/answer/components/Spinner";
import {StickyNote} from "@/app/day2/lesson-3/exercise-4/answer/components/StickyNote";

type NotesByAuthorProps = {
    amount: number
}

export const NotesByAuthor = ({amount} : NotesByAuthorProps) => {

    const [author, setAuthor] = useState("")
    const [notes, setNotes] = useState<PostIts>({ postIts: [] })

    const isLoading = notes.postIts.length == 0 && author.length > 0

    const fetchNotes = async (author: string) => {
        const notesResponse = await fetch(`https://arun.au/notes/${author}`)
        const json = await notesResponse.json() as PostIts
        setNotes(json)
    }

    return <>
        <h4>Notes from: </h4>
        <label htmlFor={"cars"}>Select an author</label>
        <select onChange={(e) => {
            setAuthor(e.target.value)
            fetchNotes(e.target.value)

        }} name={"authors"} value={author}>
            <option value={"Snail"}>Snail</option>
            <option value={"Koala"}>Koala</option>
            <option value={"Monkey"}>Monkey</option>
            <option value={"Croc"}>Croc</option>
        </select>
        { isLoading ?
            <Spinner/> :
            <span className={styles.noteContainer}>
            {
                notes.postIts
                    .sort((note, othernote) => new Date(note.created) - new Date(othernote.created))
                    .slice(0, amount)
                    .map((note) => {
                        return <StickyNote key={note.note} note={note}></StickyNote>
                    })
            }
        </span>
        }

    </>
}