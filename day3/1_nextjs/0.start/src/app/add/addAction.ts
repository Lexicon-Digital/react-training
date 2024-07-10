"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addPost = async (data: FormData) => {
  const newNote = {
    note: data.get("note"),
    author: data.get("author"),
  };

  console.log(`${newNote.note} - ${newNote.author}`);

  // TODO.1: add user using API

  revalidatePath("/");
  redirect("/");
};

export default addPost;
