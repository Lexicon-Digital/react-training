import {useEffect, useState} from "react";

export const useVote = () => {
    const [votes, setVotes] = useState<number>(0)
    useEffect(() => {
        setVotes(Number(localStorage.getItem("votes")))
    },[])
    const upvote = () => {
        setVotes(votes + 1)
        localStorage.setItem("votes", `${votes + 1}`)
    }

    const downvote = () => {
        setVotes(votes >= 1 ? votes - 1 : 0)
        localStorage.setItem("votes", `${votes >= 1 ? votes - 1 : 0}`)
    }
    return {
        votes,
        upvote,
        downvote
    }
}