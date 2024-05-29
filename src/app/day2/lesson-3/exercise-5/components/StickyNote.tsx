'use client'
import styles from "../../page.module.css";
import {Note} from "@/app/day2/lesson-3/exercise-5/answer/types/Types";

type NoteProps = {
    note: Note
}

export const StickyNote = ({note} : NoteProps) => {
    return <span className={styles.noteItem}>
                <p className={styles.content}>{note.note}</p>
                <p className={styles.author}>- {note.author}</p>
                <p className={styles.date}>{new Date(note.created).toLocaleString('default', { month: 'long', day: "2-digit" })}</p>
            </span>
}
