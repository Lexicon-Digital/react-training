'use client'
import { useState } from "react";
import ArrowUp from "../../../../../public/arrow-right.svg"
import styles from "./page.module.css";


const Page = () => {
    return <>
        <h1> Upvote me! </h1>
        <Upvote></Upvote>
    </>
}

const Upvote = () => {
    const [vote, setVote] = useState(0)

    return <span>
        <p style={{ "marginBottom": "20px" }}>Vote count: {vote}</p>
        <span className={styles.myButton} onClick={() => setVote(vote + 1)}>
            <ArrowUp className={styles.arrow}></ArrowUp>
        </span>

    </span>
}

export default Page
