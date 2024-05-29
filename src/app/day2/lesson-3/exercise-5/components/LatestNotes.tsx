import {useEffect, useState} from "react";
import styles from "../../page.module.css";
import {PostIts} from "@/app/day2/lesson-3/exercise-5/answer/types/Types";
import {StickyNote} from "@/app/day2/lesson-3/exercise-5/answer/components/StickyNote";
import {Spinner} from "@/app/day2/lesson-3/exercise-5/answer/components/Spinner";

type LatestNotesProps = {
    amount: number
}

export const LatestNotes = ({amount} : LatestNotesProps) => {
    const [notes, setNotes] = useState<PostIts>({ postIts: [] })

    const isLoading = notes.postIts.length == 0

    useEffect(() => {
        const fetchNotes = async () => {
            const notesResponse = await fetch("https://arun.au/not/a/real/uri")
            const json = await notesResponse.json() as PostIts
            setNotes(json)
        }
        fetchNotes()
    }, [])


    return <>
        <h4>Latest Notes</h4>
        { isLoading ? <Spinner/> :
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
