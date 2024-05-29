'use client'
import {useEffect, useState} from "react";
import {slowAPIRead} from "@/app/day2/lesson-2/exercise-1/utils";

const Page = () => {
    const [weather, setWeather] = useState('Fetching from api...')

    useEffect( () => {
        const fetchWeather = async () => {
            const weatherResponse = await slowAPIRead()
            setWeather(weatherResponse)
        }
        fetchWeather()
    }, [])

    const [click, setClick] = useState(0)

    return <>
        <h1> useEffect </h1>
        <h2> The weather is {weather}</h2>
        <button onClick={() => setClick(click + 1)}>{click}</button>
    </>
}

export default Page