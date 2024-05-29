'use client'

import {LatestNotes} from "@/app/day2/lesson-3/exercise-4/answer/components/LatestNotes";
import {NotesByAuthor} from "@/app/day2/lesson-3/exercise-4/answer/components/NotesByAuthor";

const Page = () => {
    return <>
        <h1> Note-worthy 📝 </h1>
        <LatestNotes/>
        <NotesByAuthor/>
    </>
}

export default Page