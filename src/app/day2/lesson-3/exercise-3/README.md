# Exercise 2 - Notes App

### Exercise

Now after that little keys diversion, lets get back to building out our API. We want to add a bit more functionality to our notes app, like showing all the notes written by a specific author.

We've got a new endpoint https://arun.au/notes/{author} which will return us all notes that were written by a specific author. Your challenge for this exercise is to implement the functionality to list all notes from the specific author that the user selects.
#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-3/exercise-3/answer)


#### But what is actually happening

You'll probably be starting to get the hang of this now, and the code will likely describe most of whats going on. But you might have one question 

**Why don't we use a useEffect, isnt this call going to block rendering?**

Well yes, it sort of is, but the difference here is that the page has already rendered. We aren't blocking the initial render waiting for an API response, the user is already seeing something. 

We could move it to a useEffect with a dependency array, like below

```typescript jsx
useEffect(() => {
    fetchNotes("koala")
}, [author])
```

But really, this doesn't help us, but it _might_ help us if we had a lot of fast loading things that relied on the state change in this component that we wanted to load first. For example, if the layout of the whole component changed based on the author
we may want to render that first, then actually execute our call.
</details>




