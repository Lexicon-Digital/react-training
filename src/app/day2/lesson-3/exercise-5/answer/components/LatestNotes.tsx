import { useEffect, useState } from "react";
import styles from "../../../page.module.css";
import { PostIts } from "@/app/day2/lesson-3/exercise-5/answer/types/Types";
import { StickyNote } from "@/app/day2/lesson-3/exercise-5/answer/components/StickyNote";
import { Spinner } from "@/app/day2/lesson-3/exercise-5/answer/components/Spinner";
import { Error } from "@/app/day2/lesson-3/exercise-5/answer/components/Error";

type LatestNotesProps = {
    amount: number
}

export const LatestNotes = ({ amount }: LatestNotesProps) => {
    const [notes, setNotes] = useState<PostIts>({ postIts: [] })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false) // For now we won't bother showing the error back to the users

    useEffect(() => {
        console.log('use effect called...')
        const fetchNotes = async () => {
            setLoading(true)
            try {
                const notesResponse = await fetch("https://intro-lemon.vercel.app/api/posts?glitch=true")
                if (notesResponse.ok) {
                    const json = await notesResponse.json() as PostIts
                    setNotes(json)
                    setLoading(false)
                } else {

                    setError(true)
                }
            } catch (error) {
                console.log(error)
                setError(true)
            }

        }
        fetchNotes()
    }, [])


    return <>
        <h4>Latest Notes</h4>
        {error && <Error><p>Oops, thats not good!</p></Error>}
        {(loading && !error) ? <Spinner /> :
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
