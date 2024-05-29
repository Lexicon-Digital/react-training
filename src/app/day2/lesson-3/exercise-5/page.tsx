'use client'

import {LatestNotes} from "@/app/day2/lesson-3/exercise-5/components/LatestNotes";
import {NotesByAuthor} from "@/app/day2/lesson-3/exercise-5/components/NotesByAuthor";

const Page = () => {
    return <>
        <h1> Note-worthy 📝 </h1>
        <LatestNotes/>
        <NotesByAuthor/>
    </>
}

export default Page