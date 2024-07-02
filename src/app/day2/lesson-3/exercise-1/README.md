# Exercise 1 - Notes App

You can see the finished product of how an API loads on the [page](http://localhost:3000/day2/lesson-3/exercise-1) don't look at the code yet though.

### Exercise

The challenge here is to use the fetch API to make a call to the following endpoint https://intro-lemon.vercel.app/api/posts which will return a list of notes, you will then
need to display the list of notes on the screen. There are some hints in the exercise page to help guide you.

The *[fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)* to make HTTP requests. The fetch API is provided by the browser and is available in all modern browsers (and Node.js).
Another commonly used library to make these requests is [axios](https://github.com/axios/axios) which for a long time was the defacto library to use, and is still widely supported and very popular today. There is no right or wrong choice here and most of the time
when you work on a project the choice was probably made for you some time ago.
#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-3/exercise-1/answer)


#### But what is actually happening

There is some JS here that you've probably never seen before, and that's OK, we are also looking to learn about the basic functions provided to us by the Javascript
standard libraries (even if that isnt the primary focus of the course).

Let's break down what we are doing here step by step

First, we need to create a state variable to store the note once we have fetched them 

```typescript jsx
const [notes, setNotes] = useState<PostIts>({ postIts: [] })
                                      1           2
// 1 - Explcitly set the return type of the use state
// 2 - Create a default value that will be used on the initial render, before the useEffect has ran
```

Then we need to use our useEffect to actually fetch the notes

```typescript jsx
const fetchNotes = async () => {
    const notesResponse = await fetch("https://intro-lemon.vercel.app/api/posts")
                            1               2
    const json = await notesResponse.json() as PostIts
                   3                   4          5
    setNotes(json)
        6
    
    // 1 - The fetch call is asynchronous, we must wait for its response
    // 2 - The URL we specified earlier that we want to call, by defualt fetch will just do a GET
    // 3 - The call to .json() is also asynchronous
    // 4 - Calling .json() will give us back the body content as json, in this case we did no error checking and just assumed it was good
    // 5 - expclitly cast the result to the type we know the API returns
    // 6 - Set our state variable
}
```

Finally we need to select only the 6 latest notes

```typescript jsx
{
    notes.postIts
        .sort((note, othernote) => new Date(note.created) - new Date(othernote.created)) // Convert the date strings in to date objects and compare them using the .sort array function
        .slice(0, 6) // Take a slice of the array beginning at 0 and ending at 6
        .map((note) => {
            return <NoteItem note={note}></NoteItem> 
            // Create a note item using the current note
            // You might have noticed already that there is something...slightly wrong here, we will fix it in exercise 2, if you already noticed good job
        })
}

```


</details>




