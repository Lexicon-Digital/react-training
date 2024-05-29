'use client'
import {useState} from "react";
import styles from "../../../page.module.css";
import {PostIts} from "@/app/day2/lesson-3/exercise-4/answer/types/Types";
import {Spinner} from "@/app/day2/lesson-3/exercise-4/answer/components/Spinner";
import {StickyNote} from "@/app/day2/lesson-3/exercise-4/answer/components/StickyNote";
import {Error} from "@/app/day2/lesson-3/exercise-5/answer/components/Error";

type NotesByAuthorProps = {
    amount: number
}

export const NotesByAuthor = ({amount} : NotesByAuthorProps) => {

    const [author, setAuthor] = useState("")
    const [notes, setNotes] = useState<PostIts>({ postIts: [] })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false) // For now we won't bother showing the error back to the users


    const fetchNotes = async (author: string) => {
        setLoading(true)
        try {
            const notesResponse = await fetch(`https://arun.au/notes/${author}`)
            if (notesResponse.ok) {
                const json = await notesResponse.json() as PostIts
                setNotes(json)
                setLoading(false)
            } else {
                setError(true)
            }
        } catch (error) {
            setError(true)
        }
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
        { error && <Error><p>Oops, thats not good!</p></Error>}
        { loading ?
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