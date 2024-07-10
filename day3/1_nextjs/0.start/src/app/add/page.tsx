
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



const addPost = async (data: FormData) => {
    "use server"

    const newNote = {
        note: data.get("note"),
        author: data.get("author")
    }

    console.log(`${newNote.note} - ${newNote.author}`)

    // TODO.1: add user using API

    revalidatePath("/")
    redirect("/");
}

const Page = () => {
    return <>
        <form action={addPost}>
            <input type="text" name="note" />
            <input type="text" name="author" />
            <button type="submit"> Add post </button>
        </form>

    </>
}
export default Page;


// 
// const res = await fetch("https://intro-lemon.vercel.app/api/posts", {
//     method: "post",
//     body: JSON.stringify(newNote),
// });

