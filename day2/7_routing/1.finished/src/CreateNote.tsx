import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostItNote, PostRequest } from "./types/types";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

type FormErrors = { author?: string; quote?: string };

const getErrors = (note: Partial<PostItNote>): FormErrors | null => {
  const hasAuthorError = !note.author || typeof note.author !== "string";
  const hasQuoteError = !note.quote || typeof note.quote !== "string";

  if (!hasAuthorError && !hasQuoteError) {
    return null;
  }

  return {
    author: hasAuthorError ? "Author is required" : undefined,
    quote: hasQuoteError ? "Quote is required" : undefined,
  };
};

export default function CreateNote() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<FormErrors | null>(null);

  const mutation = useMutation({
    mutationFn: async (note: PostRequest) => {
      const res = await fetch("https://intro-lemon.vercel.app/api/posts", {
        method: "post",
        body: JSON.stringify(note),
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate(`/`);
    },
  });

  const createNote: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const postItNote: Partial<PostItNote> = {
      author: event.currentTarget.author.value,
      quote: event.currentTarget.quote.value,
    };

    const formErrors = getErrors(postItNote);
    setErrors(formErrors);
    if (formErrors) {
      return;
    }

    event.currentTarget.reset();
    await mutation.mutateAsync({
      author: postItNote.author!,
      note: postItNote.quote!,
    });
  };

  return (
    <div>
      <h1>Create a Note</h1>
      <form onSubmit={createNote}>
        <div>
          <input type="text" id="author" placeholder="Author" />
          {errors?.author && (
            <span style={{color: 'red'}}>{errors.author}</span>
          )}
        </div>
        <div>
          <input type="text" id="quote" placeholder="Quote" />
          {errors?.quote && <span style={{color: 'red'}}>{errors.quote}</span>}
        </div>
        <button type="submit" disabled={mutation.isPending}>
          Save Quote
        </button>
      </form>
    </div>
  );
}
