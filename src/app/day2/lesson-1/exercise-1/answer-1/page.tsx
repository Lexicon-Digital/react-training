'use client'
import {useState} from "react";
import ArrowUp from "../../../../../../public/arrow-right.svg"
import styles from "./page.module.css";


const Page = () => {
    return <>
        <h1> Vote! </h1>
        <Upvote></Upvote>
    </>
}

const Upvote = () => {
    const [vote, setVote] = useState(0)
    const [downVote, setDownvote] = useState(0)

    return <span>
        <p style={styles}>Vote count: {vote}</p>
        <p style={styles}>Downvote count: {downVote}</p>
        <span className={styles.myButton} onClick={() => setVote(vote + 1)}>
            <ArrowUp className={styles.arrow}></ArrowUp>
        </span>
        <span className={styles.myButton} onClick={() => setDownvote(downVote + 1)}>
            <ArrowUp className={styles.downArrow}></ArrowUp>
        </span>

    </span>
}

export default Page