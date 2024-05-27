'use client'

import {useState} from "react";
import {slowAPIRead} from "@/app/day2/lesson-2/exercise-1/utils";

const Page = () => {
    // Hmmmm..... we don't want to wait for this to load before we render anything
    const weather = slowAPIRead()

    const [click, setClick] = useState(0)

    return <>
        <h1> useEffect </h1>
        <h2> The weather is {weather}</h2>

        {/* And this button doesnt seem to be working at all */}
        <button onClick={() => setClick(click + 1)}>I have been clicked {click} times</button>
    </>
}










export default Page