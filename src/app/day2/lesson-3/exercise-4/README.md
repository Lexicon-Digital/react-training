# Exercise 2 - Notes App - Loading States

### Exercise

By now you might be getting a bit sick of content flashing on to the screen once the page has initially rendered and fair enough, it doesnt look great, so let's work on that.

Lets add in a new loading state, so users know that they are waiting for something on the page to load. While we are at it, can we refactor the code to be a little bit more modular, maybe
break things in to their own files, it's getting a bit unwieldy.

Your challenge for this exercise is to add a loading spinner state, you can use the ```<Spinner/>``` component to do so. You should also look for opportunities to make the code a little bit more
re-usable and pleasant to read
#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-3/exercise-4/answer)


#### But what is actually happening

So visually it looks better, at least the user knows that something is loading and won't be shocked when more content appears on the screen, but it still isn't perfect..ah well. 
You've probably seen (but maybe not noticed) that many websites use skeleton content to serve as a placeholder. This skeleton content holds roughly the same size and shape as the expected
actual content, which means your page won't be bouncing over the screen. 

A good example of this is youtube, which uses grey boxes to represent where the elements will load

![youtube](../../../../../img/youtube.png)

We won't go through this right now, but you can look in to how you add it if you wanted to, it will require some decent level understanding of CSS which we arent really covering.

There is no real right or wrong way to break out your components in to a specific folder structure, some people like to try their best to keep the components as close to where they are used as possible,
others may try to group by domain, others may break them in to pages/ components/ folders and go from there. 

There is also no 100% agreed upon way on how to actually break down your components in to composable elements, you could go to the nth degree and have single line components where you
basically see no HTML at all. Just like your back end code, there are arguments to be made for both sides.
</details>




