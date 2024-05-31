# Exercise 1 - Custom Hooks

### Exercise

Let's take a step back from the notes application for a second, and go back to our simpler example of the upvote and downvote arrows. What if we had a website like reddit
where there are dozens and dozens of upvote and downvote arrows in threads and on the home page...that would be a lot of repeated code for managing it.

Your challenge in this exercise, is to take the upvote and downvote functionality and extract in to a hook, each component should use it something like 

```typescript jsx
    const votes = useVotes()
```

Where the votes object provides everything you need in that component to manage the votes, the votes should also read from local storage.

#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-4/exercise-1/answer)


#### But what is actually happening

What we've basically done here is extract the logic out in to a hook, so the Votes component itself is really only concerned with how it renders itself. This example is fairly contrived, but you could see how if you had some logic
that was commonly repeated through your app, especially across components, how extracting it in to a hook might help. For example you might have some hooks like

```typescript jsx
const status = useOnlineStatus()
const auth = useAuthentication()
```

Or any number of other possibilities
</details>




