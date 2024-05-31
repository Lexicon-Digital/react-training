import styles from "../../../page.module.css";
import ArrowUp from "../../../../../../../public/arrow-right.svg"
import {useVote} from "@/app/day2/lesson-4/exercise-1/answer/hook/useVote";


export const Vote = () => {
    const vote = useVote()
    return <span>
        <p>Vote count: {vote.votes}</p>
        <span className={styles.myButton} onClick={() => vote.upvote()}>
            <ArrowUp className={styles.arrow }></ArrowUp>
        </span>
        <span className={styles.myButton} onClick={() => vote.downvote()}>
            <ArrowUp className={styles.downArrow}></ArrowUp>
        </span>

    </span>
}

