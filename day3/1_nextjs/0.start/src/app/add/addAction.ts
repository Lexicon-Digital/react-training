"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addPost = async (data: FormData) => {
  const newNote = {
    note: data.get("note"),
    author: data.get("author"),
  };

  console.log(`${newNote.note} - ${newNote.author}`);

  const res = await fetch("https://intro-lemon.vercel.app/api/posts", {
    method: "post",
    body: JSON.stringify(newNote),
  });

  revalidatePath("/");
  redirect("/");
};

export default addPost;
